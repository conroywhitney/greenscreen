# Greenscreen
Vue.js app to generate dynamic text on top of a green screen background.

<img src="screenshot.png" width="800" />

## Run
1. Clone repository locally
2. Open `index.html`
3. ...
4. Profit!

## Extending

### Font Family
To add more fonts, use the [Google Fonts](https://fonts.google.com/?category=Sans+Serif&selection.family=Droid+Serif|Open+Sans|VT323) picker to choose your fonts and add them to your "shopping cart". Once you are done, copy the new `<link />` tag into `index.html`.

In the `fontFamily` dropdown in `index.html`, the `value` field of the `<option />` tags corresponds to the key of the `fontFamily` object in the `messageStyle()` function of `script.js`, while the value of that object corresponds to the Google Font name from above.

### Font Size
To add or change the available font sizes, edit the `<option />` tags inside the `fontSize` section of `index.html`. They will automatically be available to change the visible font size.

### Wrapper Alignment
As of the now, the `#messageWrapper` only allows vertical alignment which is computed in the `wrapperStyle()` function in `script.js` and corresponds to [`flexbox justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content). To add horizontal alignment as well, add another dropdown to `index.html`. Then, inside `wrapperStyle()`, add an `alignItems` property which corresponds to [`flexbox align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

## License
See [LICENSE](LICENSE)
