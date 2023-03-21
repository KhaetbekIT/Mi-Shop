import { GetAPIFunc, PostDataFunc } from "../api"

export const AddCategoryFunc = () => {

    const inputNameElement = document.querySelector("#category-name")
    const inputImageElement = document.querySelector("#category-image")
    const addButtonElement = document.querySelector("#category-add-btn")

    const categoryData = {
        name: "",
        image: ""
    }

    const CheckValueFunc = () => {
        if (inputNameElement.value.trim() === "" || inputImageElement.value.trim() === "") {
            addButtonElement.disabled = true
        } else {
            addButtonElement.disabled = false
        }
    }

    inputNameElement.addEventListener("input", () => {
        categoryData.name = inputNameElement.value
        CheckValueFunc()
    })
    inputImageElement.addEventListener("input", () => {

        const file = inputImageElement.files[0]

        if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") {
            const readerFile = new FileReader()

            readerFile.addEventListener("load", () => {
                categoryData.image = readerFile.result
            })

            readerFile.addEventListener("error", () => {
                categoryData.image = ""
                inputImageElement.value = ""
            })

            readerFile.readAsDataURL(file)

        } else {
            inputImageElement.value = ""
        }

        CheckValueFunc()
    })

    addButtonElement.addEventListener("click", ()=>{
        PostDataFunc("/catalog", {
            method: "POST",
            body: JSON.stringify(categoryData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data =>{
            GetAPIFunc("/catalog").then(data =>{
                console.log(data);
            })
        })
    })

    CheckValueFunc()
}