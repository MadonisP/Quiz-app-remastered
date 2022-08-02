import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import styled from 'styled-components'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth,db } from '../FirebaseConfig'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const response =await fetch('http://localhost:8000/api/register',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        lastName,
        pass
      }),
    })
    const data = await response.json()
    console.log(data)
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
              <Input placeholder="Email (username)" type="email" onChange={e=> setEmail(e.target.value)} required/>
              <Input placeholder="First Name" type="text" onChange={e=> setName(e.target.value)} required/>
              <Input placeholder="Last Name" type="text" onChange={e=> setLastName(e.target.value)} required/>
              <Input placeholder="Password" type="password" onChange={e=> setPass(e.target.value)} required/>
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