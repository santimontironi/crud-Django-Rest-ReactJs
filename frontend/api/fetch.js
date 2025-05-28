import axios from "axios";

//LOGIN Y AUTENTICACION

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', 
});

//funcion que se ejecuta antes de cada metodo http, es para verificar si existe el token de acceso
api.interceptors.request.use(
    (request) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    }
);

//funcion login
export const login = async (username, password) => {
    const res = await api.post("token/", { username, password });
    localStorage.setItem("accessToken", res.data.access);
    localStorage.setItem("refreshToken", res.data.refresh);
    return res.data;
};

//funcion logout
export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

//funciones para el crud

export const getProductos = () => api.get('productos/');

export const postProductos = (producto) =>
  api.post('productos/', producto, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

export const getProducto = (id) => api.get(`productos/${id}/`);

export const deleteProducto = (id) => api.delete(`productos/${id}/`);

export const putProducto = (id, data) => api.put(`productos/${id}/`, data);


