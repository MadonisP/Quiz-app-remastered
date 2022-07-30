import styled from 'styled-components'

const Container =styled.div`
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
color:#393E46;
    margin-bottom:20px;
`;

const Description = styled.div`
text-align:center;
color:#393E46;
`

const FeaturesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
        </Info>
    </Container>
  )
}

export default FeaturesItem