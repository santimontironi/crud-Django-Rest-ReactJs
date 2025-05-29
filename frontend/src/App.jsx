import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ProductoPage } from "../pages/ProductoPage";
import { FormPage } from "../pages/FormPage";
import { Auth } from "../pages/Auth";
import { Navigation } from "../components/Navigation";
import { Register } from "../pages/Register";


const LayoutWithNav = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

export const App = () => {
  return (
    <div className="min-h-screen w-full bg-blue-600">
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Navigate to="/auth" />} />
          
          <Route path="/auth" element={<Auth />} />
        
          <Route path="/register" element={<Register />}/>

          <Route element={<LayoutWithNav />}>
            <Route path="/productos" element={<ProductoPage />} />
            <Route path="/productoForm" element={<FormPage />} />
            <Route path="/producto/:id" element={<FormPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};
