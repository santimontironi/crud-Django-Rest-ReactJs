import { useNavigate } from "react-router-dom";

export const Producto = ({id,imagen,nombre,descripcion,stock,precio}) => {
  const navigate = useNavigate()
  return (
    <div className="border-white p-3 w-full md:w-[350px] lg:w-[380px] border-2 cursor-pointer mt-6 bg-gray-950 text-white hover:shadow-[10px_5px_10px_#000]" onClick={() => navigate('/producto/' + id)}>
      {imagen && (
        <img src={imagen} alt="Imagen del producto" className="mb-3 w-100" />
      )}
      <h1 className="text-3xl font-bold border-b-2 border-b-white pb-1">Producto: {nombre}</h1>
      <p>Descripción: {descripcion}</p>
      <h3>Precio: ${precio}</h3>
      <span>Unidades en stock: {stock}</span>
    </div>
  )
}
