# find-font

<p>
    <a href="https://www.npmjs.com/package/find-font" target="__blank">
        <img src="https://img.shields.io/npm/v/find-font.svg?color=a1b858" alt="NPM version">
    </a>
    <a href="https://www.npmjs.com/package/find-font" target="__blank">
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/find-font.svg?color=50a36f">
    </a>
    <br />
</p>

Detect fonts supported by the system on the client.

## Installation

```sh
npm install -D find-font
```

## Usage

> **Please use it in [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) environment**

```ts
import { findFont } from 'findFont'
// return false
const isSupport = findFont('AABBCC')
```

### Support [Mini Program](https://developers.weixin.qq.com/miniprogram/en/dev/framework/):

```ts
import { findFont } from 'findFont'
// https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html
const canvas = wx.createOffscreenCanvas({ type: '2d', width: 100, height: 100 })
const context = canvas.getContext('2d')
findFont('Helvetica', { canvasInstance: canvas, canvasContext2D: context })
```

### Direct run in the browser

with the help of tsup, besides supporting ESM and CommonJS, IIFE is also supported, so we can direct run in the browser.

```html
<!-- html file -->
<script src="https://unpkg.com/browse/find-font/dist/index.global.js"></script>
<script>
	const { findFont } = __FINDFONT__;
	console.log(findFont("Helvetica"), findFont("ABC"));
</script>
```

## Principle

Drawing fonts with Canvas:

1. use the [measureText](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText) API to roughly check the width of the font
2. Some fonts may be the same width, and then use the [getImagedata](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData) API to accurately check.

## Links

- [Detect Whether a Font is Installed](https://www.kirupa.com/html5/detect_whether_font_is_installed.htm)
- [js-detect-suppot-font-family](https://www.zhangxinxu.com/wordpress/2018/02/js-detect-suppot-font-family/)
## License

[MIT](https://github.com/condorheroblog/find-font/blob/main/LICENSE)
