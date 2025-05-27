import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
    <div className="login">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input type="password" placeholder="Clave" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <input type="submit" value="Ingresar" />
      </form>
      {error &&(
        <p>Hubo un error: {error}</p>
      )}
    </div>
  )
}
