import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="flex justify-between px-8 p-5 border-b-4 border-b-white">
        <Link to='/productos'>
            <h2 className="text-white text-[30px] hover:bg-amber-300 hover:text-black p-1">Productos</h2>
        </Link>

        <form className="py-4 flex gap-3" method="post">
          <input type="text" placeholder="Busqueda de producto" />
          <input type="submit" value="Buscar" />
        </form>

        <Link to='/productoForm'>
            <h2 className="text-white text-[30px] hover:bg-amber-300 hover:text-black p-1">Formulario</h2>
        </Link>
    </div>
  )
}