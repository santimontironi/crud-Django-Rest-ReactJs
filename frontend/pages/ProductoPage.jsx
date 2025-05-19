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

      <form className="mt-4 flex gap-5 align-center justify-center m-auto" method="post">
          <input className="bg-white text-dark shadow-[10px_5px_10px_#000] p-2 w-[300px]" type="text" placeholder="Busqueda de producto" />
          <input className="bg-black text-white p-1 w-[70px] cursor-pointer hover:bg-cyan-950" type="submit" value="Buscar" />
      </form>

      <div className="md:grid md:grid-cols-3 w-full mt-7 place-content-center place-items-center gap-3 sm:flex sm:flex-col sm:justify-center sm:items-center">

        {productos.map(producto => (
            <Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} descripcion={producto.descripcion}/>
        ))}

        {productos.length == 0 && (
          <h1>No hay productos agregados.</h1>
        )}
      </div>

    </div>
    
  )
}
