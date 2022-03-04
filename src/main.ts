import './style.css'
import 'rivet-uits/css/rivet.css'
import demoImg from './static/demo.jpg'

import {CropModal} from './CropModal'

const openButton = document.getElementById('review-button')!
const resultDiv = document.getElementById('result')!

function handleResult(img: Blob) {
  var imageEl: HTMLImageElement = document.createElement('img')
  imageEl.src = window.URL.createObjectURL(img)

  console.dir(imageEl)

  resultDiv.appendChild(imageEl)
}

CropModal(openButton, 'uniqueID', demoImg, handleResult)
