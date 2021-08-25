<h1 align='center'>gridsome-plugin-windicss</h1>

<p align='center'><a href="https://github.com/windicss/windicss">Windi CSS</a> for Gridsome, it's fast! ⚡️<br>
<sup><em>a.k.a On-demand Tailwind CSS</em></sup>
</p>

<p align='center'>
<a href='https://www.npmjs.com/package/gridsome-plugin-windicss'>
<img src='https://img.shields.io/npm/v/gridsome-plugin-windicss?color=0EA5E9&label='>
</a>
</p>

<p align='center'>
<a href='https://twitter.com/antfu7/status/1361398324587163648'>⚡️ See speed comparison with Tailwind</a>
</p>

## Features

- ⚡️ **It's FAST** - 20~100x times faster than [gridsome-plugin-tailwindcss](https://github.com/brandonpittman/gridsome-plugin-tailwindcss)
- 🧩 On-demand CSS utilities (Compatible with Tailwind CSS v2) and native elements style resetting
- 🍃 Load configurations from `tailwind.config.js`
- 📄 Use `@apply` / `@screen` directives in any file: Vue SFC, Less, SCSS, SASS, PostCSS, Stylus
- 🎳 Support Utility Groups - e.g. `bg-gray-200 hover:(bg-gray-100 text-red-300)`

## Install

```bash
yarn add gridsome-plugin-windicss -D
# npm i gridsome-plugin-windicss -D
```

:warning: This module is a pre-release, please report any [issues](https://github.com/windicss/gridsome-plugin-windicss/issues) you find.

## Usage

Within your `gridsome.config.js` add the following.

```js
// gridsome.config.js
module.exports = {
  // ...
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      }
    },
  ],
}
```

This module won't work with `gridsome-plugin-tailwindcss`, you will need to remove it.

```diff
 plugins: [
    {
-      use: 'gridsome-plugin-tailwindcss',
-      options: {
-        // ...
-      }
    },
  ],
```

If you have a `tailwind.config.js`, please rename it to `windi.config.js` or `windi.config.ts`.

See [here](https://windicss.netlify.app/guide/configuration.html) for configuration details.


## Migrating

If you were previously using `gridsome-plugin-tailwindcss`, please consult the [documentation](https://windicss.netlify.app/guide/migration.html) on migrating.

## Configuration

- Default:
```js
export default {
  scan: {
    dirs: ['./'],
    exclude: [
      'node_modules',
      '.git',
      'dist',
      '.cache',
      '.temp',
    ],
  },
  preflight: {
    alias: {
      // add gridsome aliases
      'g-link': 'a',
      'g-image': 'img',
    }
  }
}
```  

- See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

### Examples

#### Disable Preflight

_ngridsome.config.js_
```js
module.exports = {
  // ...
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        preflight: false,
      }
    },
  ],
}
```

## Caveats

### Scoped Style

`@media` directive with scoped style can **only work** with `css` `postcss` `scss` but not `sass`, `less` nor `stylus`

## Credits

- Windy team
- [@antfu](https://github.com/antfu) Based on his Rollup / Vite implementation & his util package

## License

MIT License © 2021 [Harlan Wilton](https://github.com/harlan-zw)

