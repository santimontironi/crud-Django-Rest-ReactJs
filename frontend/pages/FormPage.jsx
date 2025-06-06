/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { postProductos, getProducto, deleteProducto, patchProducto } from "../api/fetch";
import { useEffect, useState } from "react";

export const FormPage = () => {

  const { register, handleSubmit, setValue} = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.), setValue es para darle valores a los inputs.

  const navigate = useNavigate()
  const params = useParams()

  async function handleForm(data) {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("descripcion", data.descripcion);
    formData.append("precio", data.precio);
    formData.append("stock", data.stock);
  
    if (data.imagen && data.imagen[0]) {
      formData.append("imagen", data.imagen[0]);
    }
  
    if (params.id) {
      await patchProducto(params.id, formData);
      navigate("/productos", {
        state: { mensajeProductoEditado: true },
      });
    } else {
      await postProductos(formData);
      navigate("/productos", {
        state: { mensajeNuevoProducto: true },
      });
    }
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
      navigate('/productos',{
        state:{'mensajeProductoEliminado':true}
      })
    }
  }

  return (
    <div className="flex justify-center items-center h-[100vh] w-full bg-amber-200">
      <form className="flex flex-col justify-center items-center h-auto mt-2 pt-4 pb-4 gap-5 rounded-3xl w-[350px] bg-white shadow-[5px_10px_15px_#000]" method="post" onSubmit={handleSubmit(handleForm)}>
        {!params.id && (
          <div>
           <label className="flex flex-col gap-2" htmlFor="imagen">Imagen</label>
           <input type="file" name="imagen" id="imagen" {...register("imagen", params.id ? {} : { required: true })} className="p-3 bg-blue-500 w-[300px] text-white"/>
         </div>
        )}
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
          <div className="flex gap-5">
            <button className="bg-red-600 rounded-3xl hover:bg-red-700 text-white p-4 cursor-pointer" value='Eliminar' onClick={handleEliminar} type="button">Eliminar</button>
            <button className="bg-amber-300 p-4 cursor-pointer hover:bg-amber-400" type="submit">Editar producto</button>
          </div>
        ) : (
          <button className="bg-amber-300 p-4 cursor-pointer hover:bg-amber-400" type="submit">Agregar producto</button>
        )}

      </form>
      
    </div>
  )
}
