import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginNavbar from "./components/LoginNavbar";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
