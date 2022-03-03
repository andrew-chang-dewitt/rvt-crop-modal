import './style.css'
import 'rivet-uits/css/rivet.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <button type="button" class="rvt-button" data-modal-trigger="modal-example-basic">Open modal example</button>
`
