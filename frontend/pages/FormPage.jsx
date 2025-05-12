export const FormPage = () => {
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
      
      </form>
    </div>
  )
}
