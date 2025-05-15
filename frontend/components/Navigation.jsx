import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="flex justify-between px-6 py-5">
        <Link to='/productos'>
            <h2 className="text-white">Productos</h2>
        </Link>

        <Link to='/productoForm'>
            <h2 className="text-white">Formulario</h2>
        </Link>
    </div>
  )
}