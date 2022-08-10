import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "../components/quizHandler/Quiz";
import Result from "../components/quizHandler/Result";
import { useParams } from 'react-router-dom'
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";

const QuizController = (CUId) => {

    const userId = CUId.CUId
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const id = params;

    useEffect(() => {
        getExams();
        userCheck();

    }, [])

    const getExams = async () => {
        const { data } = await axios.get('http://localhost:5000/examquestions/' + id.id);
        setQuestions(data);
        console.log(data)
    }

    const securityData = () => {
        const dummyData = {
            userId: CUId.CUId,
            examId: "dummyId",
        };
        console.log(dummyData)
        axios.post("http://localhost:5000/userexams/", dummyData).then((response) => {
            console.log(response.status);
            console.log(response.data);
        });
    }

    const userCheck = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/userexams/' + CUId.CUId);
            if (data.length > 0) {
                alert("you have already took this exam")
            } else {
                setIsLoading(false);
                securityData();
            }
        } catch {
            alert("you have already took this exam")
        }
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
                userId={userId}
            />
            <Footer />
        </div>
    );
}

//    <Result score={score} />
export default QuizController;