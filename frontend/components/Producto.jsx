export const Producto = ({nombre,descripcion,stock,precio}) => {
  return (
    <div className="border-white p-3 w-full md:w-[350px] lg:w-[380px] border-2 cursor-pointer mt-6 bg-gray-950 text-white hover:shadow-[10px_5px_10px_#000]">
      <h1 className="text-3xl font-bold border-b-2 border-b-white pb-1">Producto: {nombre}</h1>
      <p>Descripción: {descripcion}</p>
      <h3>Precio: ${precio}</h3>
      <span>Unidades en stock: {stock}</span>
    </div>
  )
}
