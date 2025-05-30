import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/fetch"
import fondoRegistro from '../src/assets/img/fondoRegistro.jpg'

export const Register = () => {

  const navigate = useNavigate()

  const[email,setEmail] = useState("")
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  const[errorRegister,setErrorRegister] = useState("")

  async function handleRegister(e){
    e.preventDefault()
    try{
      await registerUser(username,email,password)
      navigate('/productos')
    }
    catch(error){
      setErrorRegister(error)
      setUsername('')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-b from-black/70 to-black/90 bg-blend-overlay"style={{ backgroundImage: `url(${fondoRegistro})` }}>
        <h2 className="w-full h-[180px] text-[80px] text-center text-white flex justify-center items-center">Registro</h2>
        <form className="text-white flex flex-col justify-center w-[450px] h-[auto] p-4 m-auto items-center mt-3 border-3 border-yellow-200 shadow-[7px_8px_15px_#000] hover:bg-blue-700" onSubmit={handleRegister}>
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
          <p className="mt-3">Si ya tenés cuenta:  <Link className="underline text-yellow-200 hover:text-yellow-300" to="/auth">Ingresá</Link></p>
        </form>

        {errorRegister && (
          <p>Nombre de usuario o email no válidos</p>
        )}
    </div>
  )
}
