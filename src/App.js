import Home from "./pages/Home";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateQuiz from "./pages/CreateQuiz";
import Configure from "./pages/Configure";
import { useSelector } from "react-redux";
import QuizController from "./pages/QuizController";
import Result from "./components/quizHandler/Result";



function App() {
  var currentUserUid;

  const userId = useSelector((state) => state.user.currentUser);
  console.log(userId)
  if (userId == null) {
    console.log("no auth")
  } else {
    console.log(userId.user._id)
    currentUserUid = userId.user._id
  }

  const RequireAuth = ({ children }) => {
    return currentUserUid ? (children) : <Navigate to="/login" />
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/create/:id" element={<RequireAuth><CreateQuiz /></RequireAuth>} />
        <Route path="/configure" element={<RequireAuth><Configure /></RequireAuth>} />
        <Route path="/quiz/:id" element={<RequireAuth><QuizController CUId={currentUserUid}/></RequireAuth>} />
        <Route path="/result" element={<RequireAuth><Result /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
