import {
  getLocalePaths,
  getRootLangPath,
  isPlainObject,
} from '@vuepress/helper'
import type { App, LocaleConfig } from 'vuepress'
import { ensureLeadingSlash, resolveLocalePath } from 'vuepress/shared'
import type {
  CopyCodeLocaleOptions,
  CopyCodeOptions,
} from '../types.js'
import { copyCodeButtonLocales } from './copyCodeButtonLocales.js'

export function createCopyCodeButtonRender(app: App, options?: boolean | CopyCodeOptions): ((filePathRelative: string) => string) | null {
  if (options === false)
    return null

  const { className = 'copy', locales: userLocales = {} }
    = isPlainObject(options) ? options : {}

  const root = getRootLangPath(app)
  const locales: LocaleConfig<CopyCodeLocaleOptions> = {
    // fallback locale
    '/': userLocales['/'] || copyCodeButtonLocales[root],
  }

  getLocalePaths(app).forEach((path) => {
    locales[path]
      = userLocales[path] || copyCodeButtonLocales[path === '/' ? root : path]
  })

  return (filePathRelative) => {
    const relativePath = ensureLeadingSlash(filePathRelative ?? '')
    const localePath = resolveLocalePath(locales, relativePath)

    const { title, copied } = locales[localePath] ?? {}

    return `<button class="${className}" title="${title ?? 'Copy code'}" data-copied="${copied ?? 'Copied'}"></button>`
  }
}
