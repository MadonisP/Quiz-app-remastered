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
`;

const Dashboard = () => {
  return (
    <>
      <LoginNavbar />
      <Container>
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
                  <TableCell align="right"><button><BarChart/>Analyze</button></TableCell>
                  <TableCell align="right"><button><Visibility/>Preview</button></TableCell>
                  <TableCell align="right"><button><Edit/>Edit</button></TableCell>
                  <TableCell align="right"><button><Delete/>Delete</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard