import { ModalLoginFunc, LogoutFunc } from "./modal"

export const AuthFunc = (input, password, login) =>{
    login.addEventListener("click", ()=>{
        const user = {
            lognUser: input.value,
            passUser: password.value,
        }
        localStorage.setItem("auth", JSON.stringify(user))
    })
}

export const CHeckAuthFunc = (modal, removeOne, removeTwo, openAuth)=>{
    if(JSON.parse(localStorage.getItem("auth"))){
        ModalLoginFunc(modal, removeOne, removeTwo, openAuth)
    }
}

export const LogoutAuthFunc = (eventButton)=>{
    eventButton.addEventListener("click", ()=>{
        localStorage.removeItem("auth")
    })
}