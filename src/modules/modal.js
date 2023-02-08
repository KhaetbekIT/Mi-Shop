export const openModalFunc = (modal) => {
    modal.classList.add("d-block")
    setTimeout(() => {
        modal.classList.add("show")
    }, 500)

}

export const closeModalFunc = (modal) => {
    modal.classList.remove("show")
    setTimeout(() => {
        modal.classList.remove("d-block")
    }, 500)

}

export const ModalLoginFunc = (modal, removeOne, removeTwo, openAuth) => {
    removeOne.classList.remove("d-none")
    removeTwo.classList.remove("d-none")
    openAuth.classList.add("d-none")
    closeModalFunc(modal)
}

export const LogoutFunc = (addOne, addTwo, openAuth) => {
    addOne.classList.add("d-none")
    addTwo.classList.add("d-none")
    openAuth.classList.remove("d-none")
}