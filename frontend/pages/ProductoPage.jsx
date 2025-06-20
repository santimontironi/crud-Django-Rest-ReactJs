import { useEffect, useState } from "react"
import { getProductos } from "../api/fetch"
import { Producto } from "../components/Producto"
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ProductoPage = () => {

  const[productos,setProductos] = useState([])
  const[busqueda,setBusqueda] = useState('')
  const[modoBusqueda,setModoBusqueda] = useState(false)

  const location = useLocation()

  useEffect(() => {
    if(location.state?.mensajeIngreso){
      toast.success("Inicio de sesión correcto.")
    }
  },[])

  useEffect(() => {
    if(location.state?.mensajeNuevoProducto){
      toast.success("Nuevo producto agregado.")
    }
  },[])

  useEffect(() => {
    if(location.state?.mensajeProductoEliminado){
      toast.error("Producto eliminado correctamente.")
    }
  },[])
  
  useEffect(() => {
    if(location.state?.mensajeProductoEditado){
      console.log("notificacion de editar producto activa")
      toast.info("Producto editado correctamente.")
    }
  },[])

  useEffect(() => {
    async function loadProductos() {
      try{
        const res = await getProductos()
        setProductos(res.data)
      }
      catch(error){
        console.log(error)
      }
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
          <h1 className="col-span-3 text-center lg:col-span-3 md:col-span-3 text-white text-[30px] lg:text-[40px] md:text-[40px] underline decoration-solid decoration-amber-300">
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
            <h1 className="col-span-3 text-center text-white text-[40px] underline decoration-solid decoration-amber-300 lg:col-span-3 md:col-span-3">No hay productos agregados.</h1>
          )}
        </div>
      )}
    
      <ToastContainer/>
    </div>
    
  )
}
