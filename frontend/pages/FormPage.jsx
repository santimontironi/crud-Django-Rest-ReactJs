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
    <div>
      <form method="post" onSubmit={handleSubmit(handleForm)}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre del producto" {...register("nombre", { required: true })}/>
        </div>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <input type="text" name="descripcion" id="descripcion" placeholder="Ingrese la descripción del producto" {...register("descripcion", { required: true })}/>
        </div>
        <div>
          <label htmlFor="precio">Precio</label>
          <input type="number" id="precio" name="precio"  {...register("precio", { required: true })}/>
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" {...register("stock", { required: true })} />
        </div>
        {params.id ? (
          <div>
            <input type="submit" value='Eliminar' onClick={handleEliminar} />
            <input type="submit" value='Editar' onClick={handleEditar} />
          </div>
        ) : (
          <input type="submit" value='Agregar producto' />
        )}

      </form>
    </div>
  )
}
