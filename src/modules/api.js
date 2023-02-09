export const GetAPIFunc = (path)=>{
    return fetch(path).then(response => response.json())
}