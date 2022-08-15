import styled from "styled-components"
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BarChart, Delete, Edit, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import axios from 'axios'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.table`
    width: 100%;
    height:40vh;
    border-collapse: collapse;
    text-align: center;
    border-radius:8px;
    overflow: hidden;
    background-color:#EEEEEE;
`;
const Wrapper = styled.caption`
width:90%;
margin:5%;
`
const Button = styled.button`
background-color:#EEEEEE;
color:#393E46;
border:none;
border-radius:15px;
font-size:14px;
cursor: pointer;
`
const CreateButton = styled.button`
font-size:26px;
font-weight:600;
margin-bottom:3%;
padding: 15px 25px;
border:none;
border-radius:10px;
background-color:#00ADB5;
color:#EEEEEE;
cursor: pointer;
&:hover {
  background-color: #55B4BA;
}
`
const Dashboard = (CUId) => {

  const notify = () => toast.success("Link successfully  copied to the clipboard");

  const [isLoading, setIsLoading] = useState(true);
  const [examName, setExamName] = useState("");
  const [examNameStorage, setExamNameStorage] = useState([]);
  const [dummy, setDummy] = useState(0);


  const getExamNames = async () => {
    const { data } = await axios.get(`http://localhost:5000/exam/${CUId.CUId}`);
    setExamNameStorage(data);
    setIsLoading(false);
  }

  const deleteExam = (id) => {
    axios.delete(`http://localhost:5000/exam/${id}`).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    setDummy(dummy + 1)
  }

  useEffect(() => {
    getExamNames();
  }, [examName, dummy]);

  const handleName = (e) => {
    e.preventDefault();
    if (examName == "") {
      alert("If you want to create an exam you have to give it a name")
    } else {
      const newExam = {
        creatorUserId: CUId.CUId,
        examname: examName,
      };
      console.log(newExam)
      axios.post("http://localhost:5000/exam/", newExam).then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
      setDummy(dummy + 1)
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
    <>
      <LoginNavbar />
      <Container>
        <Wrapper>
          <Popup
            trigger={<CreateButton >Create Exam </CreateButton>}
            modal
            nested
          >
            {close => (
              <div style={{ fontSize: "12px", backgroundColor: "#393E46", width: "400px" }}>
                <button style={{ cursor: "pointer", position: "absolute", display: "block", padding: "2px 5px", lineHeight: "20px", right: "-10px", top: "-10px", fontSize: "24px", background: "#ffffff", borderRadius: "18px", border: "1px solid #cfcece" }} onClick={close}>
                  &times;
                </button>
                <form onSubmit={handleName}>
                  <div style={{ width: "100", borderBottom: "1px solid gray", fontSize: "18px", padding: "5px", color: "white" }}>New Exam</div>
                  <div style={{ width: "100%", padding: "10px 5px" }}>
                    <input type="text" style={{ width: "90%", padding: "5px", borderRadius: "6px", border: "none" }} placeholder='Enter title for your exam' onChange={e => setExamName(e.target.value)} required /><br />
                  </div>
                  <div style={{ width: "100%", padding: "10px 5px", margin: "auto", textAlign: "center" }}>
                    <Popup
                      trigger={<Button className="formQButton" style={{ width: "30%", marginRight: "10px", backgroundColor: "#0275d8", color: "white" }}> Confirm </Button>}
                      position="top center"
                      nested
                    >
                    </Popup>
                    <Button
                      className="formQButton" onClick={() => { close(); }} style={{ width: "30%", color: "#100F0F" }}> Close
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </Popup>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "whitesmoke" }}>
                  <TableCell>Quizzes</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {examNameStorage.map((name) => (
                  <TableRow
                    key={name.examname}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" onClick={() => { navigator.clipboard.writeText("http://localhost:3000/quiz/" + name._id) }}>
                      <span style={{ cursor: "pointer" }} onClick={() => { notify(); }}> {name.examname}  <span style={{ color: "#CC0000" }}>{"=>"}  Click for quiz link</span> </span>
                    </TableCell>
                    <TableCell align="right"><Link to={`/anlyze/${name._id}`}><Button><BarChart style={{ verticalAlign: "middle", padding: "5px" }} />Analyze</Button></Link></TableCell>
                    <TableCell align="right"><Link to={`/quiz/${name._id}`}><Button><Visibility style={{ verticalAlign: "middle", padding: "5px" }} />Preview</Button></Link></TableCell>
                    <TableCell align="right"><Link to={`/create/${name._id}`}><Button ><Edit style={{ verticalAlign: "middle", padding: "5px" }} />Edit</Button></Link></TableCell>
                    <TableCell align="right"><Button onClick={() => { deleteExam(name._id); }}><Delete style={{ verticalAlign: "middle", padding: "5px" }} />Delete</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Dashboard