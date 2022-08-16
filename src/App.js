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
import Anlyze from "./pages/Anlyze";
import Reports from "./pages/Reports";
import Help from "./pages/Help";
import ExamReview from "./pages/ExamReview";
import NotFound from "./pages/NotFound";



function App() {
  var currentUserUid;

  const userId = useSelector((state) => state.user.currentUser);
  if (userId == null) {
    console.log("no auth")
  } else {
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
        <Route path="/help" element={<Help/>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/examreview/:id" element={<RequireAuth><ExamReview /></RequireAuth>} />
        <Route path="/create/:id" element={<RequireAuth><CreateQuiz /></RequireAuth>} />
        <Route path="/configure/:id" element={<RequireAuth><Configure /></RequireAuth>} />
        <Route path="/reports" element={<RequireAuth><Reports CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/anlyze/:id" element={<RequireAuth><Anlyze CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/quiz/:id" element={<RequireAuth><QuizController CUId={currentUserUid} /></RequireAuth>} />
        <Route path="/result/:id" element={<RequireAuth><Result /></RequireAuth>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
