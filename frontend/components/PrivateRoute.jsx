import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("accesstoken")
    return token ? children : <Navigate to="/auth"/>
}
