import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { login } from "../api/fetch"

export const Auth = () => {
  const[error,setError] = useState("")
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try{
      await login(username,password)
      navigate('/productos')
    }
    catch(error){
      setError("Usuario o contraseña incorrectos")
      console.log(error)
    }
  }

  return (
    <div className="w-full min-h-screen">
      <h2 className="w-full h-[250px] text-[80px] text-center flex justify-center items-center tracking-wider bg-gradient-to-r from-yellow-100 shadow-[5px_5px_16px_#000] to-yellow-200">Iniciar sesión</h2>
      <form className="text-white" onSubmit={handleSubmit}>
        <input className="text-white" type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input className="text-white" type="password" placeholder="Clave" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <input type="submit" value="Ingresar" />
        <p>Si no tenés una cuenta:s <Link className="bg-red-600 p-3 rounded-2xl hover:bg-red-800" to="/register">Regístrate</Link></p>
      </form>
      {error &&(
        <p>Hubo un error: {error}</p>
      )}
    </div>
  )
}
