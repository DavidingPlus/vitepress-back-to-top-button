# vitepress-back-to-top-button

A lightweight Back-to-Top button Vue 3 component for VitePress. Features smooth scroll, progress ring indicating scroll percentage, dark/light theme support.

![npm](https://img.shields.io/npm/v/@davidingplus/vitepress-back-to-top-button) ![npm](https://img.shields.io/npm/dw/@davidingplus/vitepress-back-to-top-button) ![license](https://img.shields.io/npm/l/@davidingplus/vitepress-back-to-top-button)

## Live Demo and more information

✨ See it in action:  
👉 [https://davidingplus.github.io/vitepress-back-to-top-button/](https://davidingplus.github.io/vitepress-back-to-top-button/)

📦 NPM Package:  
👉 [https://www.npmjs.com/package/@davidingplus/vitepress-back-to-top-button](https://www.npmjs.com/package/@davidingplus/vitepress-back-to-top-button)

## Installation

```sh
npm i @davidingplus/vitepress-back-to-top-button
```

## Usage

### Configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@davidingplus/vitepress-back-to-top-button' //[!code ++]
import '@davidingplus/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app) //[!code ++]
  }
}
```

### Advanced configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@davidingplus/vitepress-back-to-top-button' //[!code ++]
import '@davidingplus/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app, { // [!code ++]
      progressColor: 'string', // default is #42b983 [!code ++]
      arrowSvg: `string` // only svg code [!code ++]
    })
  }
}
```

## Preview

### Preview - Desktop

![demo-1](https://github.com/DavidingPlus/vitepress-back-to-top-button/raw/master/docs/assets/demo.gif)

