import styled from 'styled-components'
import { Person, School, Group } from '@mui/icons-material';

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`
const Section =styled.div`
   flex:1;
   margin:25px;
   height:60vh;
`
const Image =styled.img`
margin-left:110px;
width:40%;
height:40%;
border:1px solid white;
border-radius:50%;
object-fit:cover;
`
const Info =styled.div`
    margin-top:-100px;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Title =styled.h1`
    color:black;
    margin-bottom:20px;
`;

const Description = styled.div`
text-align:center;
color:#222831;
`

const QuickInfo = () => {
    return (
        <Container>
            <Section>
                <Image />
                <Info>
                    <Title>Individuals</Title>
                    <Description>{item.desc}</Description>
                </Info>
            </Section>
            <Section>
                <Image  />
                <Info>
                    <Title>Teachers</Title>
                    <Description>{item.desc}</Description>
                </Info>
            </Section>
            <Section>
                <Image />
                <Info>
                    <Title>{Businesses}</Title>
                    <Description>{item.desc}</Description>
                </Info>
            </Section>
        </Container>
    )
}

export default QuickInfo