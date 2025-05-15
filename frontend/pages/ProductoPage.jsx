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
    <div className="grid grid-cols-3 w-full mt-7 place-content-center place-items-center gap-3 p-4">

      {productos.map(producto => (
        <div className="border-white p-3 w-100 border-2 cursor-pointer mt-6 bg-gray-950 text-white">
          <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} descripcion={producto.descripcion}/>
        </div>
      ))}

      {productos.length == 0 && (
        <h1>No hay productos agregados.</h1>
      )}
    </div>
  )
}
