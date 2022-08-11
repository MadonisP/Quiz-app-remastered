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

    const params = useParams();
    const id = params;

    useEffect(() => {
        getExamNames();
    }, [])


    const getExamNames = async () => {
        const { data } = await axios.get(`http://localhost:5000/userexams/exam/${id.id}`);
        for (let i = 0; i < data.length; i++) {
            setDatas(data);
        }
    }

    const getUserName = async () => {
        for (var i = 0; i <= datas.length + 1; i++) {
            const { data } = await axios.get(`http://localhost:5000/users/` + datas[i]?.userId);
            for (let k = 0; k < data.length; k++) {
                setNames(data)
            }
        }
    }

    const check = () => {
        console.log(datas.length)
        console.log(datas)
        console.log(names)
    }

    return (
        <>
            <LoginNavbar />
            <Container>
                <Header>Exam analysis</Header>
                <Button onClick={getUserName}>show users</Button>
                <Button>show users</Button>
                <Button onClick={check}>show users</Button>
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
                        </Tr>
                    ))}
                    <Tr>
                        <Td>Alfreds Futterkiste</Td>
                        <Td>Maria Anders</Td>
                        <Td>Germany</Td>
                    </Tr>
                    <Tr>
                        <Td>Berglunds snabbköp</Td>
                        <Td>Christina Berglund</Td>
                        <Td>Sweden</Td>
                    </Tr>
                    <Tr>
                        <Td>Centro comercial Moctezuma</Td>
                        <Td>Francisco Chang</Td>
                        <Td>Mexico</Td>
                    </Tr>
                    <Tr>
                        <Td>Ernst Handel</Td>
                        <Td>Roland Mendel</Td>
                        <Td>Austria</Td>
                    </Tr>
                </Table>
            </Container>
            <Footer />
        </>
    )
}

export default Anlyze