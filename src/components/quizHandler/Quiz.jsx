import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = ({ questions, score, setScore, setQuestions, userId, exam_id}) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    const [correct, setCorrect] = useState();

    useEffect(() => {
        startFunction();
    }, [currQues, questions]);

    const startFunction = () => {
        var data;
        var dataOptions;

        data = (questions[currQues].options)
        console.log(data)
        setOptions(data);

        for (let k = 0; k < data.length; k++) {
            dataOptions = (data[k].isCorrect);
            if (dataOptions == true) {
                setCorrect(data[k].option)
                console.log(data[k].option)
            }
        }


        // const { data } = questions[currQues]?.options[currQues];
        //   setOptions(data);
    }
    console.log(exam_id)
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
                        correct={correct}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                        userId={userId}
                        exam_id={exam_id}
                    />
                </>
            ) : (
                <div>Sorry we couldn't find any question</div>
            )}
        </div>
    );
};
export default Quiz;