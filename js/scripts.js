const openAuthBtnElement = document.querySelector('#open-auth-btn')
const authModalElement = document.querySelector("#auth-modal")
const modalWindowCloseElements = authModalElement.querySelectorAll("#modal-window-close")
// Показ или скрытия кнопки для войти и выйти
const openCartBtnElement = document.querySelector("#open-cart-btn")
const logoutBtnElment = document.querySelector("#logout-btn")
const loginElment = authModalElement.querySelector("#login")

// Для работы открытие/закрытие модального окно
const openModalFunc = ()=>{
    authModalElement.classList.add("d-block")
    setTimeout(()=>{
        authModalElement.classList.add("show")
    }, 100)
}

const closeModalFunc = ()=>{

    modalWindowCloseElements.forEach((modalWindowCloseElement, modalWindowCloseElementIndex)=>{

        modalWindowCloseElement.addEventListener("click", ()=>{

            authModalElement.classList.remove("show")

            setTimeout(()=>{

                authModalElement.classList.remove("d-block")

            }, 450)
        })
    })
}

//  Функция для войти и выйти

const loginFunc = ()=>{
    openAuthBtnElement.classList.add("d-none")
    openCartBtnElement.classList.remove("d-none")
    logoutBtnElment.classList.remove("d-none")
}

const logoutFunc = ()=>{
    openAuthBtnElement.classList.remove("d-none")
    openCartBtnElement.classList.add("d-none")
    logoutBtnElment.classList.add("d-none")
}

// Вызов функций и события
openAuthBtnElement.addEventListener("click", openModalFunc)
loginElment.addEventListener("click", loginFunc)
logoutBtnElment.addEventListener("click", logoutFunc)

closeModalFunc()