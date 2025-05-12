import { useEffect, useState } from "react"
import { getProductos } from "../api/fetch"
import { Producto } from "../components/Producto"

export const ProductoPage = () => {

  const[productos,setProductos] = useState([])

  useEffect(() => {
    async function loadProductos() {
      const res = await getProductos()
      setProductos(res.data)
    }
    loadProductos()
  },[])

  return (
    <div>
      {productos.map(producto => (
        <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} descripcion={producto.descripcion}/>
      ))}

      {productos.length == 0 && (
        <h1>No hay productos agregados.</h1>
      )}
    </div>
  )
}
