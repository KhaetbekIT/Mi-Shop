const openAuthBtnElement = document.querySelector('#open-auth-btn')
const authModalElement = document.querySelector("#auth-modal")
const modalWindowCloseElements = authModalElement.querySelectorAll("#modal-window-close")

// Для работы открытие/закрытие модального окно
const openModalFunc = ()=>{
    authModalElement.style.display = "block"
    setTimeout(()=>{
        authModalElement.classList.add("show")
    }, 100)
}

const closeModalFunc = ()=>{

    modalWindowCloseElements.forEach((modalWindowCloseElement, modalWindowCloseElementIndex)=>{

        modalWindowCloseElement.addEventListener("click", ()=>{

            authModalElement.classList.remove("show")

            setTimeout(()=>{

                authModalElement.style.display = "none"

            }, 450)
        })
    })
}

// Вызов функций и события
openAuthBtnElement.addEventListener("click", openModalFunc)

closeModalFunc()