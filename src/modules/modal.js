// Для работы открытие/закрытие модального окно
export const openModalFunc = (modal) => {
    modal.classList.add("d-block")
    setTimeout(() => {
        modal.classList.add("show")
    }, 100)
}

export const closeModalFunc = (modal) => {

    modalWindowCloseElements.forEach((modalWindowCloseElement, modalWindowCloseElementIndex) => {

        modalWindowCloseElement.addEventListener("click", () => {

            modal.classList.remove("show")

            setTimeout(() => {

                modal.classList.remove("d-block")

            }, 450)
        })
    })
}