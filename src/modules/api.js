let HostAPI = "http://localhost:3001"

export const GetAPIFunc = (path)=>{
    path = HostAPI + path
    return fetch(path).then(response => response.json())
}