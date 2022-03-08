(function(e,a){typeof exports=="object"&&typeof module!="undefined"?a(exports,require("croppie")):typeof define=="function"&&define.amd?define(["exports","croppie"],a):(e=typeof globalThis!="undefined"?globalThis:e||self,a(e.CropModalLib={},e.Croppie))})(this,function(e,a){"use strict";function r(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=r(a);const s=t=>`
  <div class="rvt-modal" id="${t}-modal" role="dialog" aria-labelledby="modal-example-title" aria-hidden="true"
      tabindex=-1>
      <div class="rvt-modal__inner">
          <header class="rvt-modal__header">
              <h1 class="rvt-modal__title" id="modal-example-title">Modal title</h1>
          </header>

          <div class="rvt-modal__body">
              <div id="${t}-target"></div>
              <button id="${t}-rotate" class="rvt-button">
                Rotate
              </button>
          </div>

          <div class="rvt-modal__controls">
              <button 
                id="${t}-result" 
                type="button" 
                class="rvt-button"
                data-modal-close="${t}-modal">
                  OK
              </button>

              <button 
                type="button" 
                class="rvt-button rvt-button--secondary"
                data-modal-close="${t}-modal">
                  Cancel
              </button>
          </div>

          <button type="button" class="rvt-button rvt-modal__close" data-modal-close="${t}-modal">
              <span class="rvt-sr-only">Close</span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="currentColor"
                      d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z" />
              </svg>
          </button>
      </div>
  </div>
`;function u(t,o,c,v){const n=document.createElement("div");t.setAttribute("data-modal-trigger",`${o}-modal`),t.parentNode.insertBefore(n,t.nextSibling),n.outerHTML=s(o),document.addEventListener("modalOpen",m=>{if(m.detail.name()===`${o}-modal`){const l=new i.default(document.getElementById(`${o}-target`),{viewport:{width:90,height:90},boundary:{width:180,height:180},enableOrientation:!0});l.bind({url:c}),document.getElementById(`${o}-rotate`).addEventListener("click",d=>{d.preventDefault(),l.rotate(-90)}),document.getElementById(`${o}-result`).addEventListener("click",d=>{d.preventDefault(),l.result({type:"blob"}).then(v)})}},!1)}e.CropModal=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
