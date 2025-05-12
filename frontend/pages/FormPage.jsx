import { useForm } from "react-hook-form";

export const FormPage = () => {

  const { register, handleSubmit, formState: { errors }, setValue} = useForm() //register conecta cada input al sistema de React Hook Form (sabe su valor, cuándo cambia, etc.), setValue es para darle valores a los inputs.

  return (
    <div>
      <form method="post">
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre del producto" required/>
        </div>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <input type="text" name="descripcion" id="descripcion" placeholder="Ingrese la descripción del producto" required/>
        </div>
        <div>
          <label htmlFor="precio">Precio</label>
          <input type="number" id="precio" name="precio" required />
        </div>
        <div>
          <label htmlFor="stock">Precio</label>
          <input type="number" id="stock" name="stock" required />
        </div>
      </form>
    </div>
  )
}
