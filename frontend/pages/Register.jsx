import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/fetch"

export const Register = () => {

  const navigate = useNavigate()

  const[email,setEmail] = useState("")
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")

  async function handleRegister(){
    try{
      await registerUser(username,email,password)
      navigate('/productos')
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h2 className="w-full h-[250px] text-[80px] text-center flex justify-center items-center tracking-wider bg-gradient-to-r from-yellow-100 shadow-[5px_5px_16px_#000] to-yellow-200">Registro</h2>
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
      <input className="p-3 bg-amber-300 text-black rounded-2xl" type="submit" value="Ingresar" />
      <p className="mt-3">Si ya tenés cuenta:  <Link className="underline text-yellow-200 hover:text-yellow-300" to="/auth">Ingresá</Link></p>
    </form>
  )
}
