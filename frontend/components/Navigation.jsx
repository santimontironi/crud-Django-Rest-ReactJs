import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="flex justify-between px-8 pt-5 border-b-4 border-b-white">
        <Link to='/productos'>
            <h2 className="text-white text-[30px]">Productos</h2>
        </Link>

        <Link to='/productoForm'>
            <h2 className="text-white text-[30px]">Formulario</h2>
        </Link>
    </div>
  )
}