import axios from "axios";

const config = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/productos/'
    }
)

export const getProductos = () => {
    return config.get()
}

export const postProductos = (producto) => {
    return config.post('/',producto,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const getProducto = (id) => {
    return config.get(`/${id}/`)
}

export const deleteProducto = (id) => {
    return config.delete(`/${id}/`)
}

export const putProducto = (id, data) => {
    return config.put(`/${id}/`, data)
}