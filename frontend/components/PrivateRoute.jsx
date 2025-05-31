import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("accessToken")
    return token ? children : <Navigate to="/auth"/>
}
