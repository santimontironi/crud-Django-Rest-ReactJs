/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { postProductos, getProducto, deleteProducto, putProducto } from "../api/fetch";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export const FormPage = () => {

  const { register, handleSubmit, setValue, getValues} = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.), setValue es para darle valores a los inputs.

  const navigate = useNavigate()
  const params = useParams()

  async function handleForm(data){
    await postProductos(data)
    navigate('/productos')
    toast.success('Producto agregado correctamente')
  }

  useEffect(() => {
    async function datosProductos(){
      if(params.id){
        const res = await getProducto(params.id)
        setValue('nombre',res.data.nombre)
        setValue('descripcion',res.data.descripcion)
        setValue('precio',res.data.precio)
        setValue('stock',res.data.stock)
      }
    }
    datosProductos()
  },[params.id])

  const handleEliminar = async () => {
    const aceptar = window.confirm('¿Estas seguro de eliminar este producto?')
    if(aceptar){
      await deleteProducto(params.id)
      navigate('/productos')
    }
  }

  const handleEditar = async () => {
    const aceptar = window.confirm('¿Estas seguro que deseas editar este producto?')
    if(aceptar){
      const data = getValues()
      await putProducto(params.id,data)
      navigate('/productos')
    }
  }

  return (
    <div className="flex justify-center items-center h-[87vh] w-full bg-amber-200">
      <form className="flex flex-col justify-center items-center h-[500px] gap-5 rounded-3xl w-[350px] bg-white shadow-[5px_10px_15px_#000]" method="post" onSubmit={handleSubmit(handleForm)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre">Nombre</label>
          <input className="p-3 bg-blue-500 w-[300px] focus:text-white focus:shadow-[5px_5px_8px_#000]" id="nombre" type="text" name="nombre" placeholder="Ingrese el nombre del producto" {...register("nombre", { required: true })}/>
        </div>
        <div>
          <label className="flex flex-col gap-2" htmlFor="descripcion">Descripción</label>
          <input className="p-3 bg-blue-500 w-[300px] focus:text-white focus:shadow-[5px_5px_8px_#000]" type="text" name="descripcion" id="descripcion" placeholder="Ingrese la descripción del producto" {...register("descripcion", { required: true })}/>
        </div>
        <div>
          <label className="flex flex-col gap-2" htmlFor="precio">Precio</label>
          <input className="p-3 bg-blue-500 w-[300px] focus:text-white focus:shadow-[5px_5px_8px_#000]" type="number" id="precio" name="precio" placeholder="Ingrese el precio del producto"  {...register("precio", { required: true })}/>
        </div>
        <div>
          <label className="flex flex-col gap-2" htmlFor="stock">Stock</label>
          <input className="p-3 bg-blue-500 w-[300px] focus:text-white focus:shadow-[5px_5px_8px_#000]" type="number" name="stock" id="stock" placeholder="Ingrese la cantidad de stock" {...register("stock", { required: true })} /> 
        </div>
        {params.id ? (
          <div>
            <input type="submit" value='Eliminar' onClick={handleEliminar} />
            <input type="submit" value='Editar' onClick={handleEditar} />
          </div>
        ) : (
          <input type="submit" className="bg-amber-300 p-4 cursor-pointer hover:bg-amber-400" value='Agregar producto' />
        )}

      </form>
    </div>
  )
}
