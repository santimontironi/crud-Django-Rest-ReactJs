import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="flex justify-between px-8 p-5 border-b-4 border-b-white">
        <Link to='/productos'>
            <h2 className="text-white text-[30px] hover:bg-amber-300 hover:text-black p-1 cursor-pointer">Productos</h2>
        </Link>

        <form className="py-2 flex gap-3 align-center" method="post">
          <input className="bg-white text-dark shadow-[10px_5px_10px_#000] p-2 w-[220px]" type="text" placeholder="Busqueda de producto" />
          <input className="bg-black text-white p-1 w-[70px] cursor-pointer hover:bg-cyan-950" type="submit" value="Buscar" />
        </form>

        <Link to='/productoForm'>
            <h2 className="text-white text-[30px] hover:bg-amber-300 hover:text-black p-1 cursor-pointer">Formulario</h2>
        </Link>
    </div>
  )
}