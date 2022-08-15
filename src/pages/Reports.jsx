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

const Reports = (CUId) => {

  const [userDatas, setUserDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [examDatas, setExamDatas] = useState([]);

  useEffect(() => {
    getDatas()
  }, [])

  const getDatas = async () => {
    axios.all([
      await axios.get(`http://localhost:5000/exam`),
      await axios.get(`http://localhost:5000/userexams/` + CUId.CUId)
    ]).then(axios.spread((data, data2) => {
      for (let i = 0; i < data.data.length; i++) {
        for (let k = 0; k < data2.data.length; k++) {
          if (data.data[i]._id == data2.data[k].examId) {
            setUserDatas(oldArray => [...oldArray, {[i]:"Solved"}] );
          }
        }
      }
      setExamDatas(data.data)
      console.log(data.data)
    }))
    setIsLoading(false)
  }

  console.log(userDatas)

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
        <Header>Status report</Header>
        <Table>
          <Tr>
            <Th>Exam Name</Th>
            <Th>Link</Th>
            <Th>Status</Th>
          </Tr>
          {examDatas.map((user, index) => (
            <Tr key={index}>
              <Td>{user.examname}</Td>
              <Td><Link to={`/quiz/${user._id}`}><Button>Go to exam</Button></Link></Td>
              <Td>{index == Object.keys(userDatas[0]) ? (<span>{userDatas[index]}</span>) : (<span>{"Available"}</span>)}</Td>
            </Tr>
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  )
}

export default Reports