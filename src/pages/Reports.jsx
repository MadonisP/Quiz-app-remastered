import Footer from '../components/Footer'
import LoginNavbar from '../components/LoginNavbar'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
background-color:#393E46;
color:#EEEEEE;
border:none;
border-radius:15px;
font-size:14px;
cursor: pointer;
`

const Reports = () => {

  const [userDatas, setUserDatas] = useState([]);

  useEffect(() => {
    getDatas()
  },[])

  const getDatas = async() => {
    const { data } = await axios.get(`http://localhost:5000/exam`);
    setUserDatas(data);
    console.log(data)
  }

  return (
    <>
      <LoginNavbar />
      <Container>
        <Header>Status report</Header>
        <Table>
          <Tr>
            <Th>Exam Name</Th>
            <Th>Status</Th>
          </Tr>
          {userDatas.map((user) => (
            <Tr>
              <Td>{user.examname}</Td>
              <Td><Link to={`/quiz/${user._id}`}><Button>Go to exam</Button></Link></Td>
            </Tr>
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  )
}

export default Reports