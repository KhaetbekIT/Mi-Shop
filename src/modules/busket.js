import { GetAPIFunc } from "./api"

export const BusketFunc = ()=>{
    const container = document.querySelector("#cart-container")
    
    GetAPIFunc("/cart").then(data =>{
        container.innerHTML = ""
        data.map(item=>{
            const {id, name, price, count} = item
            container.insertAdjacentHTML("beforeend", `
                <div class="row border-bottom pb-3 pt-3">
                    <div class="col col-12 col-md-6 mb-3 mb-md-0 fs-4">
                        ${name}
                    </div>
                    <div
                        class="col col-12 col-md-6 fs-4 d-flex align-items-center justify-content-end flex-wrap">
                        <h4 class="me-3 d-flex align-itemns-center">${price} ₽</h4>
                        <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"
                            id="control-dec">
                            -
                        </button>
                        <h6 class="cart-item-count me-3 ms-3"> ${count} </h6>
                        <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"
                            id="control-inc">
                            +
                        </button>
                    </div>
                </div>
            `)
        })
    })

}