import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/fetch"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fondoRegistro from '../src/assets/img/fondoRegistro.jpg'

export const Register = () => {

  const navigate = useNavigate()

  const[email,setEmail] = useState("")
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  const[errorRegister,setErrorRegister] = useState("")

  async function handleRegister(e){
    e.preventDefault()
    toast.loading("Cargando...")
    try{
      await registerUser(username,email,password)
      toast.dismiss()
      navigate('/auth',{
        state:{'registroExitoso':true}
      })  
    }
    catch(error){
      toast.dismiss()
      setErrorRegister(error)
      setUsername('')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className="w-full min-h-screen bg-no-repeat bg-cover bg-center"style={{ backgroundImage: `url(${fondoRegistro})` }}>
        <h2 className="w-full h-[180px] text-[80px] text-center text-white flex justify-center items-center">Registro</h2>
        <form className="text-white flex flex-col justify-center md:w-[450px] lg:w-[500px] w-[350px] h-[auto] p-4 m-auto items-center mt-1 border-3 border-yellow-200 hover:shadow-[7px_8px_15px_#000]" onSubmit={handleRegister}>
          <div className="mb-3 flex flex-col gap-2 items-start">
            <label htmlFor="email">Email:</label>
            <input className="text-white p-3 w-[260px] border-2 border-yellow-200" value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="mb-3 flex flex-col gap-2 items-start">
            <label htmlFor="usuario">Usuario:</label>
            <input className="text-white p-3 w-[260px] border-2 border-yellow-200" type="text" id="usuario" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div className="mb-3 flex flex-col gap-2 items-start">
            <label htmlFor="clave">Clave:</label>
            <input className="text-white p-3 w-[260px] border-2 border-yellow-200" type="password" id="clave" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <input className="p-3 bg-amber-300 text-black rounded-2xl cursor-pointer" type="submit" value="Registrate" />
        </form>
        <p className="mt-3 text-center bg-white p-2 w-[220px] m-auto">Si ya tenés cuenta: <Link className="text-blue-700 hover:text-blue-500" to="/auth">Ingresá</Link></p>

        {errorRegister && (
          <p className="text-center m-auto text-red-600">Nombre de usuario o email no válidos</p>
        )}

        <ToastContainer/>
    </div>
  )
}
