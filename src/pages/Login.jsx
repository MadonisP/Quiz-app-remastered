import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { auth } from "../FirebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

const Container = styled.div`
width:100%;
height:80vh;
display: flex;
align-items: center;
justify-content: center;
background-color:whitesmoke;
overflow:hidden;
`
const Wrapper = styled.div`
width:60%;
height:100%;        
padding:20 px; 
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
border-bottom: 1px solid rgba(0,0,0,.25);
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
const Link = styled.a`
margin: 20px 0px;
font-size:15px;
text-decoration:underline;
cursor:pointer;
`;

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("success")
        const user = userCredential.user;
        console.log(user)
        dispatch({ type: "LOGIN", payload: user })
        navigate("/dashboard")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <HeroTitle>Login</HeroTitle>
          <FormWrapper>
            <Form onSubmit={handleLogin}>
              <Input placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} required/>
              <Input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} required/>
              <Button>Login</Button>
              <Link href="/register">Create a new account</Link>
            </Form>
          </FormWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Login