import { GitHub, LinkedIn, MailOutline, Room, YouTube } from '@mui/icons-material';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color:#EEEEEE;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
margin-left:6%;
`;
const Logo = styled.h1``;
const Description = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;
const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`    
    flex:1;
    padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items:center;
`;
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>OEM</Logo>
                <Description>
                    Hey some small talk i made this quiz maker site before and now i am remastering it. I hope you guys like it. If you want to give a feedback you can contact me with my social media accounts witch i linked below and mail is valid contact way too thanks for all the attention have a nice day.
                </Description>
                <SocialContainer>
                    <SocialIcon color="55ACEE">
                        <a href="https://www.linkedin.com/in/mert-s%C3%BCha-iga%C3%A7-988b3b238/"><LinkedIn /></a>
                    </SocialIcon>
                    <SocialIcon color="222831">
                        <a href="https://github.com/MadonisP"><GitHub /></a>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <a href="https://www.youtube.com/channel/UCMrlNRGicIRlf-aISM10Ccw/videos"><YouTube /></a>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Register</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Features</ListItem>
                    <ListItem>Help</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />
                    Turkey
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />
                    mertsuhaigac@outlook.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer