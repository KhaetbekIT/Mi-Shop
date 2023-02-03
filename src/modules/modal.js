export const openModalFunc = (modal)=>{
    modal.classList.add("d-block")
    setTimeout(()=>{
        modal.classList.add("show")
    }, 500)
    
}

export const closeModalFunc = (modal) =>{
    modal.classList.remove("show")
    setTimeout(()=>{
        modal.classList.remove("d-block")
    }, 500)
    
}
