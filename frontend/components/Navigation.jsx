import { Link } from "react-router-dom";

export const Navigation = () => {

  return (
    <div className="flex justify-between px-8 p-5 border-b-4 border-b-white">
        <Link to='/productos'>
            <h2 className="text-white text-[30px] hover:bg-amber-300 hover:text-black p-1 cursor-pointer">Productos</h2>
        </Link>

        <Link to='/productoForm'>
            <h2 className="text-white text-[30px] hover:bg-amber-300 hover:text-black p-1 cursor-pointer">Formulario</h2>
        </Link>
    </div>
  )
}