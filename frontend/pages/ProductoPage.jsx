import { useEffect, useState } from "react"
import { getProductos } from "../api/fetch"
import { Producto } from "../components/Producto"

export const ProductoPage = () => {

  const[productos,setProductos] = useState([])
  const[busqueda,setBusqueda] = useState('')
  const[modoBusqueda,setModoBusqueda] = useState(false)

  useEffect(() => {
    async function loadProductos() {
      const res = await getProductos()
      setProductos(res.data)
    }
    loadProductos()
  },[])

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="pb-5">

      <form className="mt-4 flex gap-5 align-center justify-center m-auto" method="post">
          <input className="bg-white text-dark shadow-[10px_5px_10px_#000] p-2 w-[300px]" type="text" placeholder="Busqueda de productos" onChange={(e) => {
            setBusqueda(e.target.value)
            setModoBusqueda(true)
          }} />
      </form>

      {modoBusqueda ? (

        <div className="md:grid md:grid-cols-3 w-full mt-7 place-content-center place-items-center gap-3 sm:flex sm:flex-col sm:justify-center sm:items-center">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Producto
              key={producto.id}
              id={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              descripcion={producto.descripcion}
            />
          ))
        ) : (
          <h1 className="col-span-3 text-white text-[40px] underline decoration-solid decoration-amber-300">
            No hay productos con ese nombre.
          </h1>
        )}
        </div>
      ) : (
        <div className="md:grid md:grid-cols-3 w-full mt-7 place-content-center place-items-center gap-3 sm:flex sm:flex-col sm:justify-center sm:items-center">

          {productos.map(producto => (
              <Producto key={producto.id} id={producto.id} imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} descripcion={producto.descripcion}/>
          ))}

          {productos.length == 0 && (
            <h1>No hay productos agregados.</h1>
          )}
        </div>
      )}
    
    </div>
    
  )
}
