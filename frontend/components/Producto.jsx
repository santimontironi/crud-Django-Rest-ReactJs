export const Producto = ({nombre,descripcion,stock,precio}) => {
  return (
    <div>
      <h1>Producto: {nombre}</h1>
      <p>Descripción: {descripcion}</p>
      <h3>Precio: ${precio}</h3>
      <span>Unidades en stock: {stock}</span>
    </div>
  )
}
