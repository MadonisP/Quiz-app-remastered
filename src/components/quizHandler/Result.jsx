import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import LoginNavbar from "../LoginNavbar";
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  text-align: center;
`

const Result = () => {

  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params;

  useEffect(() => {
    getExamNames();
  }, [])

  const getExamNames = async () => {
    const { data } = await axios.get(`http://localhost:5000/userexams/exam/${id.id}`);
    console.log(data);
    setScore(data);
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
    <>
      <LoginNavbar />
      <Container>
        <span>Final Score : {score}</span>
        <Link to="/dashboard">
          <button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20, cursor: "pointer" }}
          >
            Go to homepage
          </button>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Result;