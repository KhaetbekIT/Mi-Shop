export const authFunc = () => {
    const openAuthBtnElement = document.querySelector('#open-auth-btn')
    const authModalElement = document.querySelector("#auth-modal")
    const modalWindowCloseElements = authModalElement.querySelectorAll("#modal-window-close")
    // Показ или скрытия кнопки для войти и выйти
    const openCartBtnElement = document.querySelector("#open-cart-btn")
    const logoutBtnElment = document.querySelector("#logout-btn")
    const loginElment = authModalElement.querySelector("#login")
    // Получаем данные из модальной формы
    const loginControlElement = document.querySelector("#login-control")
    const passwordControlElement = document.querySelector("#password-control")

    // Для работы открытие/закрытие модального окно
    const openModalFunc = () => {
        authModalElement.classList.add("d-block")
        setTimeout(() => {
            authModalElement.classList.add("show")
        }, 100)
    }

    const closeModalFunc = () => {

        modalWindowCloseElements.forEach((modalWindowCloseElement, modalWindowCloseElementIndex) => {

            modalWindowCloseElement.addEventListener("click", () => {

                authModalElement.classList.remove("show")

                setTimeout(() => {

                    authModalElement.classList.remove("d-block")

                }, 450)
            })
        })
    }

    //  Функция для войти и выйти

    const loginFunc = () => {
        saveValueFunc()
        openAuthBtnElement.classList.add("d-none")
        openCartBtnElement.classList.remove("d-none")
        logoutBtnElment.classList.remove("d-none")
        authModalElement.classList.remove("show")
        setTimeout(() => {
            authModalElement.classList.remove("d-block")
        }, 450)
    }

    const logoutFunc = () => {
        openAuthBtnElement.classList.remove("d-none")
        openCartBtnElement.classList.add("d-none")
        logoutBtnElment.classList.add("d-none")
        localStorage.removeItem("auth")
    }

    // Хранения данных в локальном хранилище

    const saveValueFunc = () => {
        const user = {
            login: loginControlElement.value,
            password: passwordControlElement.value
        }

        localStorage.setItem("auth", JSON.stringify(user))
    }

    const checkAuthFunc = () => {
        let jsonParseAuth = JSON.parse(localStorage.getItem("auth"))
        if (jsonParseAuth) {
            loginFunc()
        }

    }

    // Вызов функций и события
    openAuthBtnElement.addEventListener("click", openModalFunc)
    loginElment.addEventListener("click", loginFunc)
    logoutBtnElment.addEventListener("click", logoutFunc)

    closeModalFunc()
    checkAuthFunc()
}