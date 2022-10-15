export const upperCase = (str) => {
  return str.split(/-|\s+/).filter(Boolean).map((s) => {
    return s[0].toUpperCase() + s.slice(1)
  }).join('')
}

export const lowerCase = (str) => {
  str = upperCase(str)
  return str[0].toLowerCase() + str.slice(1)
}

export const packageName = (name) => {
  return 'plugin-' + name.trim().split(/-|\s+/).filter(Boolean).join('-')
}