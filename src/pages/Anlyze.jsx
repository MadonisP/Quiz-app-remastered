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

    const [examInfo, setExamInfo] = useState([]);
    const [start, setStart] = useState(false);

    const params = useParams();
    const id = params;

    useEffect(() => {
        getExamInfos();
        // getExam();
    }, [])


    const getExamInfos= async () => {
        const { data } = await axios.get(`http://localhost:5000/userexams/exam/${id.id}`);
        console.log(data)
        setExamInfo(data);
    }


    /*
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
        */


    // onClick={getUserName}

    return (
        <>
            <LoginNavbar />
            <Container>
                <Header>Exam analysis</Header>
                <Table>
                    <Tr>
                        <Th>User Name</Th>
                        <Th>Exam</Th>
                        <Th>Score</Th>
                        <Th>cevaplarım</Th>
                    </Tr>
                    {examInfo.map((exam) => (
                        <Tr
                            key={exam._id}>
                            <Td>{exam.userInfo.username}</Td>
                            <Td>{exam.userInfo.examname}</Td>
                            <Td>{exam.grade}</Td>
                            <Td><button>Click me</button></Td>
                        </Tr>
                    ))}
                </Table>
            </Container>
            <Footer />
        </>
    )
}

export default Anlyze