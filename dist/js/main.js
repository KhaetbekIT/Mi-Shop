(()=>{var e={33:(e,t,n)=>{"use strict";n.d(t,{nj:()=>a,om:()=>c});let o="http://localhost:3001";const c=e=>(e=o+e,fetch(e).then((e=>e.json()))),a=(e,t)=>(e=o+e,fetch(e,{method:"PATCH",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then((e=>e.json())))},942:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BusketFunc:()=>c});var o=n(33);const c=()=>{const e=document.querySelector("#cart-container"),t=document.querySelector("#cart-totlal-price"),n=()=>{(0,o.om)("/cart").then((n=>{e.innerHTML="",n.map((t=>{const{id:n,name:o,price:c,count:a}=t;e.insertAdjacentHTML("beforeend",`\n                    <div class="row border-bottom pb-3 pt-3">\n                        <div class="col col-12 col-md-6 mb-3 mb-md-0 fs-4">\n                            ${o}\n                        </div>\n                        <div\n                            class="col col-12 col-md-6 fs-4 d-flex align-items-center justify-content-end flex-wrap">\n                            <h4 class="me-3 d-flex align-itemns-center">${c} ₽</h4>\n                            <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"\n                                id="control-dec" id="control-inc" data-id="${n}" data-count="${a}">\n                                -\n                            </button>\n                            <h6 class="cart-item-count me-3 ms-3"> ${a} </h6>\n                            <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"\n                                id="control-inc" data-id="${n}" data-count="${a}">\n                                +\n                            </button>\n                        </div>\n                    </div>\n                `)})),(e=>{let n=0;e.forEach((e=>{n+=Number(e.count)*Number(e.price)})),t.innerText=n+" ₽"})(n)}))};e.addEventListener("click",(e=>{if("BUTTON"===e.target.tagName)if(e.target.id&&"control-inc"===e.target.id){const t=e.target.dataset.id,c={count:Number(e.target.dataset.count)+1};(0,o.nj)(`/cart/${t}`,c).then((()=>{n()}))}else if(e.target.id&&"control-dec"===e.target.id){const t=e.target.dataset.id,c=Number(e.target.dataset.count);if(c>0){const e={count:c-1};(0,o.nj)(`/cart/${t}`,e).then((()=>{n()}))}}})),n()}},187:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CategoriesFunc:()=>c});var o=n(33);const c=()=>{const e=document.querySelector("#categories-container"),t=document.querySelector("#catalog-search");(0,o.om)("/catalog").then((t=>{e.innerHTML="",t.map((t=>{const{id:n,category:o,name:c,image:a}=t;e.insertAdjacentHTML("beforeend",`\n            <div class="col col-12 col-md-6 col-lg-4 mb-3">\n\n                <a href="./catalog.html?id=${n}" class="card-link">\n                    <div class="card">\n                        <img src="${a}" class="card-img-top" alt="phones">\n                        <div class="card-body">\n                            <h5 class="card-title">${c}</h5>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            `)}))})),t.addEventListener("input",(t=>{(0,o.om)(`/catalog?q=${t.target.value}`).then((t=>{e.innerHTML="",t.map((t=>{const{id:n,category:o,name:c,image:a}=t;e.insertAdjacentHTML("beforeend",`\n                <div class="col col-12 col-md-6 col-lg-4 mb-3">\n    \n                    <a href="./catalog.html?id=${n}" class="card-link">\n                        <div class="card">\n                            <img src="${a}" class="card-img-top" alt="phones">\n                            <div class="card-body">\n                                <h5 class="card-title">${c}</h5>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                `)}))}))}))}},83:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ScriptFunc:()=>s});var o=n(33);const c=e=>{e.classList.add("d-block"),document.body.insertAdjacentHTML("beforeend",'\n        <div id="layout" class="modal-backdrop fade"></div>\n    '),setTimeout((()=>{document.querySelector("#layout").classList.add("show"),e.classList.add("show")}),500)},a=e=>{e.classList.remove("show"),setTimeout((()=>{const t=document.querySelector("#layout");t&&t.remove(),e.classList.remove("d-block")}),500)},r=(e,t,n,o)=>{t.classList.remove("d-none"),n.classList.remove("d-none"),o.classList.add("d-none"),a(e)},s=()=>{const e=document.querySelector("#open-auth-btn"),t=document.querySelector("#auth-modal"),n=document.querySelectorAll("#modal-window-close"),s=t.querySelector("#login"),d=document.querySelector("#open-cart-btn"),l=document.querySelector("#logout-btn"),i=document.querySelector("#cart-modal"),u=document.querySelector("#login-control"),m=document.querySelector("#password-control");var v,g;a(e),e.addEventListener("click",(()=>{c(t)})),n.forEach(((e,n)=>{e.addEventListener("click",(()=>{a(t)})),e.addEventListener("click",(()=>{a(i)}))})),s.addEventListener("click",(()=>{r(t,d,l,e)})),l.addEventListener("click",(()=>{d.classList.add("d-none"),l.classList.add("d-none"),e.classList.remove("d-none")})),d.addEventListener("click",(()=>{c(i)})),v=u,g=m,s.addEventListener("click",(()=>{const e={lognUser:v.value,passUser:g.value};(0,o.om)("/profile").then((t=>{t.login===e.lognUser&&t.password===e.passUser&&localStorage.setItem("auth",JSON.stringify(e))}))})),l.addEventListener("click",(()=>{var t,n;t=l,n=e,d.classList.add("d-none"),t.classList.add("d-none"),n.classList.remove("d-none")})),((e,t,n,c)=>{let a=JSON.parse(localStorage.getItem("auth"));a&&(0,o.om)("/profile").then((o=>{o.login===a.lognUser&&o.password===a.passUser&&r(e,t,n,c)}))})(t,d,l,e),l.addEventListener("click",(()=>{localStorage.removeItem("auth")}))}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{BusketFunc:e}=n(942),{CategoriesFunc:t}=n(187),{ScriptFunc:o}=n(83);o(),t(),e()})()})();