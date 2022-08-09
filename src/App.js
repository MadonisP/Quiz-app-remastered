import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginNavbar from "./components/LoginNavbar";
import Dashboard from "./pages/Dashboard";
import CreateQuiz from "./pages/CreateQuiz";
import Configure from "./pages/Configure";
import { useSelector } from "react-redux";



function App() {
  const userId = useSelector((state) => state.user.currentUser);
  console.log(userId)
  if(userId==null){
     console.log("no auth")
  }else{
     console.log(userId.user._id)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create/:id" element={<CreateQuiz />} />
        <Route path="/configure" element={<Configure />} />
      </Routes>
    </div>
  );
}

export default App;
