export const Producto = ({nombre,descripcion,stock,precio}) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <h3>{precio}</h3>
      <span>{stock}</span>
    </div>
  )
}
