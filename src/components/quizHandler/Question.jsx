import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LoginNavbar from "../LoginNavbar";
import Footer from "../Footer";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SingleQuestion = styled.div`
  width: 95%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 5px solid grey;
  padding: 20px;
  margin-top: 10px;
`
const Options = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
`
const SingleOption = styled.button`
  width: 46%;
  height: 50px;
  padding: 15px 20px;
  margin: 10px;
  box-shadow: 0 0 2px black;
`
const Control = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
const Select = styled.div`
  background-color: rgb(7, 207, 0);
  color: white;
  box-shadow: 0 0 1px black;
`
const Wrong = styled.div`
  background-color: rgb(233, 0, 0);
  color: white;
  box-shadow: 0 0 1px black;
`

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
  userId,
  exam_id
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  const navigate = useNavigate()

  const params = useParams();
  const id = params;

  useEffect(() => {
    handleCreatorUser();
  }, [])

  const handleCreatorUser = async () => {
    const { data } = await axios.get('http://localhost:5000/exam/exam/' + id.id)
    setPass(data[0].creatorUserId == userId)
    setIsLoading(false)
  }

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) { setScore(score + 1); }
    setError(false);
  };

  const handleNext = () => {
    if (currQues >= (questions.length - 1)) {
      navigate(`/result/${id.id}`);
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(exam_id)
    if (pass == userId) {
      console.log("datas did not saved")
    } else {
      const userExam = {
        userId: userId,
        examId: id.id,
        grade: score,
      };
      axios.patch(`http://localhost:5000/userexams/${exam_id}`, userExam).then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
    }
  }

  const handleReview = (i) => {
    if (pass == userId) {
      console.log("datas did not saved")
    } else {
      const userOptions = {
        examReview: {
          qAnswers: i,
          qCorrect: correct,
          qTitle: questions[currQues].questionTitle,
        }
      };
      console.log(userOptions)
      axios.put("http://localhost:5000/userexams/" + exam_id, userOptions).then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
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
    <Container>
      <h1>Question {currQues + 1} :</h1>
      <SingleQuestion>
        <h2>{questions[currQues].questionTitle}</h2>
        <Options>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((option) => (
              <button className={`singleOption  ${selected && handleSelect(option.option)}`}
                key={option._id} creator
                onClick={() => { handleCheck(option.option); handleReview(option.option) }}
                disabled={selected}>
                {option.option}
              </button>
            ))}
        </Options>
        <Control>
          <button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}>
            {currQues >= (questions.length - 1) ? (<span onClick={handleSubmit} >Submit</span>) : (<span>Next Question</span>)}
          </button>
        </Control>
      </SingleQuestion>
    </Container >
  );
};

export default Question;