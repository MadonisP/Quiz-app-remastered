import React from 'react'
import styled from 'styled-components'
import { ArrowRightAlt } from '@mui/icons-material';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden; 
`

const Wrapper = styled.div`
height:100%;
display:flex;


`

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-image: url("https://img.wallpapersafari.com/desktop/1680/1050/96/28/Fx0vPz.jpg");
background-repeat: no-repeat;
`

const ImgContainer = styled.div`
height:100%;
flex:1;
`

const Image = styled.img`
height:80%;
`

const Title = styled.h1`
font-size:70px;
color:#EEEEEE;
`

const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Description = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Slide style={{objectFit: "cover"}}>
                    <InfoContainer>
                        <Title>
                            iş yerimizin özellikleri
                        </Title>
                        <Description>
                            fln fln fln fln fln lfn fl lorem ipsum denemesi classic             
                            fln fln fln fln fln lfn fl lorem ipsum denemesi classic
                            fln fln fln fln fln lfn fl lorem ipsum denemesi classic
                            fln fln fln fln fln lfn fl lorem ipsum denemesi classic
                        </Description>
                        <Button>
                            Get Started for Free <ArrowRightAlt />
                        </Button>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src="https://i.ibb.co/9sCCj2b/exam.png" />
                    </ImgContainer>
                </Slide>
            </Wrapper>
        </Container>
    )
}

export default Hero