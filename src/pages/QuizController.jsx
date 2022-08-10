import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "../components/quizHandler/Quiz";
import Result from "../components/quizHandler/Result";
import { useParams } from 'react-router-dom'
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";

const QuizController = () => {

    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const id = params;

    useEffect(() => {
        getExams();
    }, [])

    const getExams = async () => {
        const { data } = await axios.get('http://localhost:5000/examquestions/' + id.id);
        setQuestions(data);
        console.log(data)
        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <>
                <LoginNavbar />
                <div style={{ verticalAlign: "middle", display: "flex", border: "16px solid #f3f3f3", borderRadius: "50%", borderTop: "16px solid #3498db", width: "120px", height: "120px", WebkitAnimation: "spin 2s linear infinite" }}></div>
                <Footer />
            </>)
    }
    return (
        <div>
            <LoginNavbar />
            <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
            />
            <Footer />
        </div>
    );
}

//    <Result score={score} />
export default QuizController;