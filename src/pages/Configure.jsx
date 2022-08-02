import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import LoginNavbar from '../components/LoginNavbar'
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig"

const Container = styled.div`
width: 100%;
height:60vh;
border-collapse: collapse;
align-items: center;
justify-content: center;
text-align: center;
border-radius:8px;
overflow: hidden;
background-color:#EEEEEE;
`
const Wrapper = styled.div`
width:86%;
height:100%;
margin:0% 7%;
align-items: center;
justify-content: center;  
background-color:white;
`
const Form = styled.form`
height:100%;
margin:0% 10%;
display: flex;
flex-wrap: wrap;
background-color:#EEEEEE;
`
const Input = styled.input`
min-width:500px;
margin:20px 10px 0px 0px;
padding:5px;
border:none;
border-radius:3px;
`

const Label = styled.label`
font-size:14px;
padding: 10px;
`

const Section = styled.div`
margin:10px 20px;
`
const Button = styled.button`
font-size:16px;
font-weight:400;
border:none;
border-radius:3px;
background-color:#0275d8;
color:white;
margin:10px 20px;
padding:10px 30px;
cursor: pointer;
`

const Configure = () => {



  return (
    <>
      <LoginNavbar />
      <Container>
        <Wrapper>
          <Form >
            <Section>
              <Label for="quizName">Quiz Name</Label>
              <Input type="text" name="quizName" value="deneme"  />{/*Name */}
            </Section>
            <Section>
              <Label for="time">Time Limit</Label>
              <Input type="number" name="time" placeholder='20 min by default' />{/*Time */}
            </Section>
            <Section>
              <Label for="grade">Pass Grade</Label>
              <Input type="text" name="grade" placeholder='70 by default' />{/*Grade */}
            </Section>
            <Section>
              <Button align="right" style={{ margin: "0px 400px 20px 20px" }}>Save</Button>
            </Section>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Configure