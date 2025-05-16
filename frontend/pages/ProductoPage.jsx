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
    <div className="md:grid md:grid-cols-3 w-full mt-7 place-content-center place-items-center gap-3 sm:flex sm:flex-col sm:justify-center sm:items-center">

      {productos.map(producto => (
          <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} descripcion={producto.descripcion}/>
      ))}

      {productos.length == 0 && (
        <h1>No hay productos agregados.</h1>
      )}
    </div>
  )
}
