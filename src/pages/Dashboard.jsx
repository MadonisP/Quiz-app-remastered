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
import { useContext, useEffect, useState } from "react";
import { collection, query, where, getDocs, addDoc  } from "firebase/firestore";
import { db } from "../FirebaseConfig"
import { AuthContext } from "../context/AuthContext"
import Popup from 'reactjs-popup';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Deneme sınavı 1', 159, 6.0, 24, 4.0),
  createData('Deneme sınavı 2', 237, 9.0, 37, 4.3),
  createData('Deneme sınavı 3', 262, 16.0, 24, 6.0),
  createData('Deneme sınavı 4', 305, 3.7, 67, 4.3),
  createData('Deneme sınavı 5', 356, 16.0, 49, 3.9),
];

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

const Dashboard = () => {

  useEffect((e) => {
    getExamNames(e);
  }, []);

  const [examDatas, setExamDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [examName, setExamName] = useState("");
  const { currentUser } = useContext(AuthContext);

  const getExamNames =  () => {

  }

  const handleName = () => {
  
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
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right"><Button><BarChart style={{ verticalAlign: "middle", padding: "5px" }} />Analyze</Button></TableCell>
                    <TableCell align="right"><Button><Visibility style={{ verticalAlign: "middle", padding: "5px" }} />Preview</Button></TableCell>
                    <TableCell align="right"><Button><Edit style={{ verticalAlign: "middle", padding: "5px" }} />Edit</Button></TableCell>
                    <TableCell align="right"><Button><Delete style={{ verticalAlign: "middle", padding: "5px" }} />Delete</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard