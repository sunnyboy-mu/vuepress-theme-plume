const fs = require('fs')
const path = require('path')
const execa = require('execa')
const ora = require('ora')
const chalk = require('chalk')

const packages = [
  ...fs.readdirSync(path.join(__dirname, '../packages')).map(dir => path.join('../packages', dir)),
  '../docs'
]

const dependencies = packages.map(dir => {
  const pkg = fs.readFileSync(path.join(__dirname, dir, 'package.json'))
  const { dependencies, devDependencies } = JSON.parse(pkg)
  return {
    dirname: path.join(__dirname, dir),
    dependencies: filterVuePress(Object.keys(dependencies || {})),
    devDependencies: filterVuePress(Object.keys(devDependencies || {}))
  }
})

function filterVuePress(dependencies) {
  const vuepress = dependencies.filter(
    dependence => dependence.startsWith('@vuepress/') || dependence.startsWith('vuepress-')
  ).map(dependence => dependence + '@next')
  const includes = ['vue', 'vue-router']
  const vue = dependencies.filter(
    dependence => includes.includes(dependence)
  )
  return [...vue, ...vuepress]
}

const options = []
dependencies.forEach(({ dirname, dependencies, devDependencies }) => {
  if (dependencies.length) {
    options.push(['pnpm', ['add', ...dependencies], { cwd: dirname }])
  }
  if (devDependencies.length) {
    options.push(['pnpm', ['add', '-D', ...devDependencies], { cwd: dirname }])
  }
})

async function install(index = 0) {
  if (index >= options.length) return
  const spinner = ora()
  const opt = options[index]
  const dir = opt[2].cwd.split('/').slice(-2).join('/')
  console.log('Installing ', chalk.cyan(dir));
  console.log(chalk.gray(opt[0], opt[1].join(' ')));
  console.log('\n');
  const current = execa(opt[0], opt[1], opt[2])
  current.stdout.pipe(process.stdout)
  try {
    await current;
    spinner.succeed('Installed.')
    await install(index + 1)
  } catch(e) {
    spinner.fail('Install Fail.')
    console.log(e)
  }
}

install()