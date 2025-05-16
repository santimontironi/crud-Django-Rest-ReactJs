import axios from "axios";

const config = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/productos/'
    }
)

export const getProductos = () => {
    return config.get()
}

export const postProductos = (producto) => {
    return config.post('/',producto)
}

export const getProducto = (id) => {
    return config.get(`/${id}/`)
}