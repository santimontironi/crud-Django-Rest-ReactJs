import { useState, useEffect } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { login } from "../api/fetch"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fondoAuth from '../src/assets/img/fondoAuth.jpg'

export const Auth = () => {
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  const[errorAuth,setErrorAuth] = useState("")

  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    if(location.state?.registroExitoso){
      toast.success("Usuario registrado correctamente, ahora inicie sesión")
    }
  },[])

  async function handleSubmit(e){
    e.preventDefault()
    toast.loading("Cargando...")
    try{
      await login(username,password)
      toast.dismiss()
      navigate('/productos',{
        state:{'mensajeIngreso':true}
      })
    }
    catch(error){
      toast.dismiss()
      setErrorAuth(error)
      setUsername("")
      setPassword("")
    }
  }

  return (
    <div className="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-b from-black/70 to-black/90 bg-blend-overlay"style={{ backgroundImage: `url(${fondoAuth})` }}>
      <h2 className="w-full md:h-[180px] lg:h-[200px] h-[200px] md:text-[80px] lg:text-[95px] text-[60px] text-center flex justify-center items-center text-white">Iniciar sesión</h2>
      <form className="text-white flex flex-col justify-center md:w-[450px] lg:w-[450px] w-[350px] h-[auto] p-4 m-auto items-center mt-7 border-3 border-yellow-200 hover:shadow-[7px_8px_15px_#000]" onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col gap-2 items-start">
          <label htmlFor="usuario">Usuario:</label>
          <input className="text-white p-3 w-[260px] border-2 border-yellow-200" type="text" id="usuario" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div className="mb-3 flex flex-col gap-2 items-start">
          <label htmlFor="clave">Clave:</label>
          <input className="text-white p-3 w-[260px] border-2 border-yellow-200" type="password" id="clave" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <input className="p-3 bg-amber-300 text-black rounded-2xl cursor-pointer hover:bg-amber-500" type="submit" value="Ingresar" />
        <p className="mt-3">Si no tenés una cuenta:  <Link className="underline text-yellow-500" to="/register">Regístrate</Link></p>
      </form>
      {errorAuth &&(
        <p>Datos no válidos</p>
      )}

      <ToastContainer/>
    </div>
  )
}
