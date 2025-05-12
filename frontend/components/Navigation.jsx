import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
        <Link to='/productos'>
            <h2>Productos</h2>
        </Link>

        <Link to='/productoForm'>
            <h2>Formulario</h2>
        </Link>
    </div>
  )
}