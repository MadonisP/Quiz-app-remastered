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
    getUserDatas()
    getExamDatas()
  }, [])



  const getUserDatas = async () => {
    const { data } = await axios.get(`http://localhost:5000/userexams/` + CUId.CUId)
    setUserDatas(data)
    console.log(data)
  }

  const getExamDatas = async () => {
    await axios.get(`http://localhost:5000/exam`).then((response) => {
      setExamDatas(response.data)
      console.log(response.data)
      setIsLoading(false)
    })
  }


  console.log()
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
          {examDatas.map((exam, index) => (
            <Tr key={index}>
              <Td>{exam.examname}</Td>
              <Td><Link to={`/quiz/${exam._id}`}><Button>Go to exam</Button></Link></Td>
              <Td>{userDatas.findIndex(u=> u.examId === exam._id) > -1 ? (<span style={{border:"none",borderRadius:"10px",padding:"5px",backgroundColor:"#CC0000",color:"#EEEEEE",fontWeight:"500" }}>{"Solved"}</span>) : <span style={{border:"none",borderRadius:"10px",padding:"5px",backgroundColor:"#007E33",color:"#EEEEEE",fontWeight:"500" }}>{"Available"}</span>}</Td>
            </Tr>
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  )
}

export default Reports