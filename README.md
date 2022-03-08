rvt-crop-modal
===

A simple JavaScript function to insert the markup for a Rivet Modal that prompts a user to crop a photo using [Foliotek/Croppie](https://github.com/foliotek/croppie).

Installation
---

Depending on your needs, download either the ESM or UMD version of the library from [the latest release](). _**FIXME: create release & insert link here.**_
Import file w/ script tag or otherwise in your build system.

_**TODO:**_ package for installation via NPM; currently not supported.

### Co-requisites:

The following two packages are co-requisites that will be needed for the function to work.
You will need to have both installed & available in your build system.

1. [IU's Rivet framework](rivet.iu.edu)
2. [Foliotek/Croppie](https://github.com/foliotek/croppie)

Usage
---

`rvt-crop-modal` exports a single function, `CropModal`, with the following signature:

```typescript:example/src/CropModal/index.ts [54-59]
```

To use it, simply get a reference to the button your users will click to trigger the modal:

```typescript
const openButton = document.getElementById('review-button')
```

and create a handler to call when the modal's 'OK' button is clicked:

```javascript:example/index.html [26-35]
```

then call the `CropModal` function:

```javascript:example/index.html [37]
```

### Example

All the code above is contained in a single working example located at `./example/`:

```html:example/index.html
```
