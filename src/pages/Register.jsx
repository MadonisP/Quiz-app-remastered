import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import styled from 'styled-components'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Container = styled.div`
width:100vw;
height:80vh;
display: flex;
align-items:center;
justify-content: center;
background-color:whitesmoke;
`
const Wrapper = styled.div`
width:60%;     
padding:20px; 
align-items: center;
justify-content: center;
background-color:#EEEEEE;
`
const HeroTitle = styled.h1`
font-size:32px;
font-weight:500;
text-align:center;
padding-top:100px;
padding-bottom:20px;
`
const Title = styled.h3`
font-size:18px;
font-weight:300;
text-align:center;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex:1;
margin:20px 10px 0px 0px;
padding:8px;
`
const Button = styled.button`
min-width:40%;
border:none;
border-radius:15px;
margin:20px 10px 0px 0px;
padding:5px;
background-color:teal;
color:white;
cursor:pointer;
`
const FormWrapper = styled.div`
width:40%;
margin:auto;
display: flex;
align-items: center;
justify-content:center;
flex-wrap: wrap;
boder:1px solid black
`


const Register = () => {

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    const registered = {
      firstname: name,
      lastname: lastName,
      email: email,
      password: pass,
    }
    console.log(registered)
    axios.post("http://localhost:5000/users/", registered).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });

    navigate("/login");

  }


  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <HeroTitle>Sign up to OEM for free</HeroTitle>
          <Title>Register to create and manage online tests, quizzes and assessments with OEM.</Title>
          <FormWrapper>
            <Form onSubmit={handleRegister}>
              <Input placeholder="Email (username)" type="email" onChange={e => setEmail(e.target.value)} required />
              <Input placeholder="First Name" type="text" onChange={e => setName(e.target.value)} required />
              <Input placeholder="Last Name" type="text" onChange={e => setLastName(e.target.value)} required />
              <Input placeholder="Password" type="password" onChange={e => setPass(e.target.value)} required />
              <Button type="submit">Register for free</Button>
            </Form>
          </FormWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Register