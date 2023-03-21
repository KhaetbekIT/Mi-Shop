let HostAPI = "http://localhost:3001"

export const GetAPIFunc = (path)=>{
    path = HostAPI + path
    return fetch(path).then(response => response.json())
}

export const PostDataFunc = (path, data) =>{
    path = HostAPI + path
    return fetch(path, data).then(response => response.json())
}

export const DeleteDataFunc = (path) =>{
    path = HostAPI + path
    return fetch(path, {
        method: "DELETE"
    }).then(response => response.json())
}