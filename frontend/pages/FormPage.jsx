import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postProductos } from "../api/fetch";
import { toast } from "react-hot-toast";

export const FormPage = () => {

  const { register, handleSubmit, formState: { errors }, setValue} = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.), setValue es para darle valores a los inputs.

  const navigate = useNavigate()

  async function handleForm(data){
    await postProductos(data)
    navigate('/productos')
    toast.success('Producto agregado correctamente')
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
        <input type="submit" value='Agregar producto' />
      </form>
    </div>
  )
}
