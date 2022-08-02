import { useContext, useState } from 'react'
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
import { ArrowForward, AddCircle, RemoveCircleOutline } from '@mui/icons-material';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig"
import { AuthContext } from "../context/AuthContext"
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';

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

    const { currentUser } = useContext(AuthContext);
    const [options, setOptions] = useState([]);
    const [correctOption, setCorrectOption] = useState();

    const addQuestion = async (e) => {
        e.preventDefault();
        const inputOption = inputFields.map((inputF) => inputF.option)
        setOptions(inputOption);
        console.log(options)
        try {
            const docRef = await addDoc(collection(db, "examQuestions"), {
                creatorUser: currentUser.uid,
                options: options,
                correctAnswer: correctOption
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), option: '' },
    ]);

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), option: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    const selectShortlistedApplicant = (e) => {
        const checked = e.target.checked;
        if (checked) {
            console.log("checked")
        } else {
            console.log("check")
        }
    };

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
                                            <Label htmlFor="A">first option</Label>
                                            <br /><Check type="radio" name="options" value="B" />
                                            <Label htmlFor="B">second option</Label>
                                            <br /><Check type="radio" name="options" value="C" />
                                            <Label htmlFor="C">third option</Label>
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
                                    <Popup
                                        trigger={<button style={{ width: "20%", height: "30px", padding: "5px" }}>Add Question</button>}
                                        modal
                                        nested
                                    >
                                        {close => (
                                            <div style={{ fontSize: "12px", backgroundColor: "#FFCFDF", width: "800px", height: "auto" }}>
                                                <button style={{ cursor: "pointer", position: "absolute", display: "block", padding: "2px 5px", lineHeight: "20px", right: "-10px", top: "-10px", fontSize: "24px", background: "#ffffff", borderRadius: "18px", border: "1px solid #cfcece" }} onClick={close}>
                                                    &times;
                                                </button>

                                                <div style={{ width: "100", borderBottom: "1px solid gray", fontSize: "18px", padding: "5px" }}>New Question</div>
                                                <div style={{ fontSize: "16px", fontWeight: "500" }}>Question:</div>
                                                <form onSubmit={addQuestion} style={{ width: "100%", padding: "10px 5px" }}>

                                                    {inputFields.map(inputField => (
                                                        <div key={inputField.id}>
                                                            <textarea
                                                                name="option"
                                                                label="First Name"
                                                                variant="filled"
                                                                value={inputField.option}
                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                            />

                                                            <RemoveCircleOutline disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} />
                                                            <AddCircle onClick={handleAddFields} />
                                                            <input type="radio" name='correct' value={inputField.option} onClick={(e) => setCorrectOption(e.target.value)} />
                                                            <Label htmlFor="correct">Correct</Label>
                                                        </div>
                                                    ))}
                                                    <div style={{ width: "100%", padding: "10px 5px", margin: "auto", textAlign: "center" }}>
                                                        <Popup
                                                            trigger={<button className="formQButton" type='submit' style={{ width: "30%", marginRight: "10px" }}> Confirm </button>}
                                                            position="top center"
                                                            nested
                                                        >
                                                        </Popup>
                                                        <button
                                                            className="formQButton" onClick={() => { close(); }} style={{ width: "30%", backgroundColor: "#ECE2E1", color: "#100F0F" }}> Close
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </Popup>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align='right'><NextButton>Next<ArrowForward style={{ verticalAlign: "middle", transform: "scale(0.9)" }} /></NextButton></TableCell>
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