import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/fetch";

export const Navigation = () => {

  const navigate = useNavigate()

  function handleLogout(){
    try{
      logout()
      navigate('/auth')
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className="flex justify-between px-8 p-5 border-b-4 border-b-white">
        <Link to='/productos'>
            <h2 className="text-white text-[30px] hover:bg-green-500 hover:text-white p-1 cursor-pointer">Productos</h2>
        </Link>

        <Link to='/productoForm'>
            <h2 className="text-white text-[30px] hover:bg-amber-300 hover:text-black p-1 cursor-pointer">Formulario</h2>
        </Link>

        <button onClick={handleLogout}>
          <h2 className="text-white text-[30px] hover:bg-red-600 hover:text-white p-1 cursor-pointer">Cerrar sesión</h2>
        </button>
    </div>
  )
}