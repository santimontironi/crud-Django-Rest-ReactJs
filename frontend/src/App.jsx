import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Productos } from "../pages/Productos";
import { ProductoForm } from "../pages/ProductoForm";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to = '/productos' />} />
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/productoForm" element={<ProductoForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

