// import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = ({ questions, score, setScore, setQuestions }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(1);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    useEffect(() => {
        handleSlide();
    }, []);

    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.options,
            ])
        );
        console.log(options)
    }, [currQues, questions]);

    const handleSlide = () => {
        for (let i = 0; i <= questions?.length; i++) {
            const find = questions[i].options.indexOf(questions[i].correctOption)
            if (find > -1) {
                questions[i].options.splice(questions[i].correctOption, 1)
                setIncorrectAnswers(questions[i].options);
            }
        }
        console.log(questions)
    }



    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="quiz">
            {questions ? (
                <>
                    <div className="quizInfo">
                        <span>
                            Score : {score}
                        </span>
                    </div>
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                    />
                </>
            ) : (
                <div>xd</div>
            )}
        </div>
    );
};
/* <CircularProgress
style={{ margin: 100 }}
color="inherit"
size={150}
thickness={1}
/>
*/
export default Quiz;