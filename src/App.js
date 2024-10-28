
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/HomePage";


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        {/* Thêm route mặc định redirect đến trang login */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/auth/register" element={<SignUpPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
