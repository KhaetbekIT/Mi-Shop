import {openModalFunc, closeModalFunc} from "./modal"

export const ScriptFunc = ()=>{
    const openAuthBtnElement = document.querySelector("#open-auth-btn")
    const authModalElement = document.querySelector("#auth-modal")
    const modalWindowCloseElements = document.querySelectorAll("#modal-window-close")
    const modalLoginBtnElemen = authModalElement.querySelector("#login")
    const openCartBtnElement = document.querySelector("#open-cart-btn")
    const logoutBtnElement = document.querySelector("#logout-btn")
    const cartModalElemet = document.querySelector("#cart-modal")

    // 
    closeModalFunc(openAuthBtnElement)
    openAuthBtnElement.addEventListener("click", ()=>{
        openModalFunc(authModalElement)
    })

    modalWindowCloseElements.forEach((modalWindowCloseElement, modalWindowCloseElementIndex)=>{
        modalWindowCloseElement.addEventListener("click", ()=>{
            closeModalFunc(authModalElement)
        })
        modalWindowCloseElement.addEventListener("click", ()=>{
            closeModalFunc(cartModalElemet)
        })
    })
    modalLoginBtnElemen.addEventListener("click", ()=>{
        openCartBtnElement.classList.remove("d-none")
        logoutBtnElement.classList.remove("d-none")
        openAuthBtnElement.classList.add("d-none")
        closeModalFunc(authModalElement)

    })
    logoutBtnElement.addEventListener("click", ()=>{
        openCartBtnElement.classList.add("d-none")
        logoutBtnElement.classList.add("d-none")
        openAuthBtnElement.classList.remove("d-none")
    })
    openCartBtnElement.addEventListener("click", ()=>{
        openModalFunc(cartModalElemet)
    })

}