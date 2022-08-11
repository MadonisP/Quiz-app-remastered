// import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = ({ questions, score, setScore, setQuestions, userId }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);


    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.options,
            ])
        );
    }, [currQues, questions]);

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
                        correct={questions[currQues]?.correctOption}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                        userId={userId}
                    />
                </>
            ) : (
                <div>xd</div>
            )}
        </div>
    );
};
export default Quiz;