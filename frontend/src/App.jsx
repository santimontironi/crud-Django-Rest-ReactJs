import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ProductoPage } from "../pages/ProductoPage";
import { FormPage } from "../pages/FormPage";
import { Navigation } from "../components/Navigation";

export const App = () => {
  return (
    <div className="min-h-screen w-full bg-blue-600">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate to = '/productos' />} />
          <Route path="/productos" element={<ProductoPage/>} />
          <Route path="/productoForm" element={<FormPage/>} />
          <Route path="/producto/:id" element={<FormPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

