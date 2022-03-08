rvt-crop-modal
===

A simple JavaScript function to insert the markup for a Rivet Modal that prompts a user to crop a photo using [Foliotek/Croppie](https://github.com/foliotek/croppie).

Installation
---

Depending on your needs, download either the ESM or UMD version of the library from [the latest release](https://github.com/andrew-chang-dewitt/rvt-crop-modal/releases). 
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

```typescript
function CropModal(
  openButton: HTMLElement,
  id: string,
  imgSrc: string,
  handleResult: ResultHandler
): null
```

To use it, simply get a reference to the button your users will click to trigger the modal:

```javascript
const openButton = document.getElementById('review-button')
```

and create a handler to call when the modal's 'OK' button is clicked:

```javascript
// a trivial handler that just renders the returned blob
function handleResult(img) {
  // create an empty image element
  var imageEl = document.createElement('img')
  // create a url from the blob
  imageEl.src = window.URL.createObjectURL(img)

  // add the image element to the result div
  resultDiv.appendChild(imageEl)
}
```

then call the `CropModal` function, passing the reference to the button, a unique string to give as an ID for the modal & related elements, a path to your image that needs cropped, & a reference to the handler you wrote:

```typescript 
CropModalLib.CropModal(openButton, 'aUniqueID', './demo.jpg', handleResult)
```

### Example

All the code above is contained in a single working example located at `./example/`:

`example/index.html`
```typescript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rivet Crop Modal Demo</title>
    <link href="./rivet.min.css" rel="stylesheet" />
    <link href="./croppie.css" rel="stylesheet" />
</head>

<body>
    <button id="review-button" type="button" class="rvt-button">Review image</button>

    <h2>Result:</h2>

    <div id="result"></div>

    <script src="./rivet.min.js"></script>
    <script src="./croppie.js"></script>
    <script src="./rvt-crop-modal.umd.js"></script>
    <script>
        const openButton = document.getElementById('review-button')
        const resultDiv = document.getElementById('result')

        // a trivial handler that just renders the returned blob
        function handleResult(img) {
            // create an empty image element
            var imageEl = document.createElement('img')
            // create a url from the blob
            imageEl.src = window.URL.createObjectURL(img)

            // add the image element to the result div
            resultDiv.appendChild(imageEl)
        }

        CropModalLib.CropModal(openButton, 'aUniqueID', './demo.jpg', handleResult)
    </script>
</body>

</html>
```
