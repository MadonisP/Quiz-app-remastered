import styled from 'styled-components'
import Footer from '../components/Footer'
import LoginNavbar from '../components/LoginNavbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ArrowForward } from '@mui/icons-material';

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

const Wrapper = styled.div`
  width:86%;
  margin:7%;
  `


const Check = styled.input`
  transform : scale(1.5);
    margin:20px;
    color:;
  `
const Label = styled.label`
  color:;
  `
const Button = styled.button`
font-size:16px;
margin:10px;
padding:10px;
border:none;
border-radius:5px;
background-color:#0275d8;
color:#EEEEEE;
cursor: pointer;
&:hover {
    background-color: #228CE9;
  }
  `

const NextButton = styled.button`
font-size:16px;
margin:10px;
padding:10px;
border:none;
border-radius:5px;
background-color:#5cb85c;
color:#EEEEEE;
cursor: pointer;
&:hover {
    background-color: #75DB75;
  }
  `

const CreateQuiz = () => {
    return (
        <>
            <LoginNavbar />
            <Container>
                <Wrapper>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ backgroundColor: "whitesmoke" }}>
                                    <TableCell align="right"></TableCell>
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
                                        <TableCell component="th" scope="row" style={{ color: "#222831", fontSize: "16px", fontWeight: "600", padding: "25px" }}>
                                            {row.name}
                                            <br /><Check type="radio" name="options" value="A" />
                                            <Label for="A">first option</Label>
                                            <br /><Check type="radio" name="options" value="B" />
                                            <Label for="B">second option</Label>
                                            <br /><Check type="radio" name="options" value="C" />
                                            <Label for="C">third option</Label>
                                        </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableHead>
                                <TableRow>
                                    <TableCell><Button>Add Question</Button></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align='right'><NextButton>Next<ArrowForward style={{verticalAlign:"middle",  transform: "scale(0.9)"}}/></NextButton></TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default CreateQuiz