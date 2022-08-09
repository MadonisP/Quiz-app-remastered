import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "../components/quizHandler/Quiz";
import Result from "../components/quizHandler/Result";
import { useParams } from 'react-router-dom'

const QuizController = () => {

    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    const params = useParams();
    const id = params;

    useEffect(() => {
        getExams();
    }, [])

    const getExams = async () => {
        const { data } = await axios.get('http://localhost:5000/examquestions/' + id.id);
        setQuestions(data);
        console.log(data[0].options);
    }

    return (
        <div>
            <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
            />
        </div>
    );
}

//    <Result score={score} />
export default QuizController;