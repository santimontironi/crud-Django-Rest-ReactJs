import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ProductoPage } from "../pages/ProductoPage";
import { FormPage } from "../pages/FormPage";
import { Navigation } from "../components/Navigation";

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to = '/productos' />} />
        <Route path="/productos" element={<ProductoPage/>}/>
        <Route path="/productoForm" element={<FormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

