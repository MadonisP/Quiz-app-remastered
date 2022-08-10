import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Result = ({ score }) => {
  const navigate = useNavigate()
  console.log(score)
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Result;