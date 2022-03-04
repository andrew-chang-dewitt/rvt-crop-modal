// Assets
// import 'croppie/croppie.css'

// Dependencies
import Croppie from 'croppie'

const ModalMarkup = (id: string) => (`
  <div class="rvt-modal" id="${id}-modal" role="dialog" aria-labelledby="modal-example-title" aria-hidden="true"
      tabindex=-1>
      <div class="rvt-modal__inner">
          <header class="rvt-modal__header">
              <h1 class="rvt-modal__title" id="modal-example-title">Modal title</h1>
          </header>

          <div class="rvt-modal__body">
              <div id="${id}-target"></div>
              <button id="${id}-rotate" class="rvt-button">
                Rotate
              </button>
          </div>

          <div class="rvt-modal__controls">
              <button 
                id="${id}-result" 
                type="button" 
                class="rvt-button"
                data-modal-close="${id}-modal">
                  OK
              </button>

              <button 
                type="button" 
                class="rvt-button rvt-button--secondary"
                data-modal-close="${id}-modal">
                  Cancel
              </button>
          </div>

          <button type="button" class="rvt-button rvt-modal__close" data-modal-close="${id}-modal">
              <span class="rvt-sr-only">Close</span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="currentColor"
                      d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z" />
              </svg>
          </button>
      </div>
  </div>
`)

interface ResultHandler {
  (img: Blob): void
}

export function CropModal(
  openButton: HTMLElement,
  id: string,
  imgSrc: string,
  handleResult: ResultHandler
) {
  // create an empty div to replace with modal markup
  const el = document.createElement('div')
  // add data-modal-trigger attribute to openButton
  openButton.setAttribute('data-modal-trigger', `${id}-modal`)
  // place new el after open Button
  openButton.parentNode!.insertBefore(el, openButton.nextSibling)
  // & replace el with modal markup
  el.outerHTML = ModalMarkup(id)

  // Listen for a rivet "modalOpen" event
  document.addEventListener('modalOpen', (event: any) => {
    // when the modal opens
    if (event.detail.name() === `${id}-modal`) {
      // create new croppie element at target
      const croppie = new Croppie(
        document.getElementById(`${id}-target`)!,
        {
          viewport: {width: 90, height: 90},
          boundary: {width: 180, height: 180},
          enableOrientation: true,
        },
      )
      // give image src url to croppie element
      croppie.bind({url: imgSrc})

      // rotate button listener
      document
        .getElementById(`${id}-rotate`)!
        .addEventListener('click', (event) => {
          event.preventDefault()

          // use built-in rotate method
          croppie.rotate(-90)
        })

      // ok button listener
      document
        .getElementById(`${id}-result`)!
        .addEventListener('click', (event) => {
          event.preventDefault()

          // get cropped result as blob & pass to handler
          croppie.result({
            type: 'blob'
          }).then(handleResult)
        })
    }
  }, false);
}
