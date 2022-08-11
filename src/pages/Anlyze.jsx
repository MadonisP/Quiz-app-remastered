import Footer from '../components/Footer'
import LoginNavbar from '../components/LoginNavbar'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Container = styled.div`
height:100%;
margin: 4% 7%;
`
const Table = styled.table`
font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`
const Td = styled.td`
border: 1px solid #ddd;
  padding: 8px;
`
const Th = styled.th`
    border: 1px solid #ddd;
  padding: 12 8px;
  text-align: left;
  background-color: #393E46;
  color: #EEEEEE; 
`
const Tr = styled.tr`
&:nth-child(even){
    background-color: #f2f2f2;
}
&:hover {
    background-color:#ddd;
  }
`
const Header = styled.h1`
  text-align:center;
  padding-bottom:10px;
  colot:#222831;
`
const Button = styled.button`

`

const Anlyze = (CUId) => {

    const [datas, setDatas] = useState([]);
    const [names, setNames] = useState([]);
    const [examName, setExamName] = useState([]);
    const [start, setStart] = useState(true);

    const params = useParams();
    const id = params;

    useEffect(() => {
        getExamNames();
        getExam();
    }, [])


    const getExamNames = async () => {
        const { data } = await axios.get(`http://localhost:5000/userexams/exam/${id.id}`);
        for (let i = 0; i < data.length; i++) {
            setDatas(data);
        }
    }

    const getExam = async () => {
        const { data } = await axios.get(`http://localhost:5000/exam/exam/${id.id}`);
        for (let i = 0; i < data.length; i++) {
            setExamName(data);
        }
        console.log(data)
    }

    const getUserName = async () => {
        for (var i = 0; i <= datas.length - 1; i++) {
            const { data } = await axios.get(`http://localhost:5000/users/` + datas[i]?.userId);
            for (let k = 0; k < data.length; k++) {
                setNames(data)
            }
        }
        setStart(false)
    }

    return (
        <>
            <LoginNavbar />
            <Container>
                <Header>Exam analysis</Header>
                <Button onClick={getUserName}>show users</Button>
                <Table>
                    <Tr>
                        <Th>User Name</Th>
                        <Th>Exam</Th>
                        <Th>Score</Th>
                    </Tr>
                    {names.map((name) => (
                        <Tr
                            key={name.email}>
                            <Td>{name.firstname} {name.lastname}</Td>
                            {examName.map((exam) => (<Td>{exam.examname}</Td>))}
                            {datas.map((data) => (<Td>{data.grade}</Td>))}
                        </Tr>
                    ))}
                    {start && (
                        <Tr>
                            <Td>UserName will be here</Td>
                            <Td>Exam Name</Td>
                            <Td>Exam Score</Td>
                        </Tr>
                    )}
                </Table>
            </Container>
            <Footer />
        </>
    )
}

export default Anlyze