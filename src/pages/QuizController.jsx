import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "../components/quizHandler/Quiz";
import Result from "../components/quizHandler/Result";
import { useParams } from 'react-router-dom'
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";

const QuizController = (CUId) => {

    const userId = CUId.CUId
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const id = params;

    useEffect(() => {
        getExams();
        // userCheck();

    }, [])

    const getExams = async () => {
        const { data } = await axios.get('http://localhost:5000/examquestions/' + id.id);
        setQuestions(data);
        console.log(data);
        setIsLoading(false);
    }

    const securityData = async () => {
        axios.all([
            await axios.get('http://localhost:5000/users/' + CUId.CUId),
            await axios.get('http://localhost:5000/exam/exam/' + id.id)
        ]).then(axios.spread((data, data2) => {
            const dummyData = {
                userId: CUId.CUId,
                examId: id.id,
                userInfo: {
                    username: data.data[0].firstname + " " + data.data[0].lastname,
                    examname: data2.data[0].examname,
                    score: 0,
                }
            };
            axios.post("http://localhost:5000/userexams/", dummyData).then((response) => {
                console.log(response.status);
                console.log(response.data);
            });
        }))
    }

    /*

   

    */

    /*  const userCheck = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/userexams/' + CUId.CUId);
            const myData = await Promise.all(data.map((d) => d.examId))
            for (let i = 0; i <= myData.length; i++) {
                if (myData[i] === id.id) {
                    alert("you have already took this exam")
                    return
                }
            }
            setIsLoading(false);
            securityData();
        } catch (err) {
            console.log(err);
            alert("you have already took this exam")
        }
    }
    */


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