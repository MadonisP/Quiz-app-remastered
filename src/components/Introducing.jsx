import { Public } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
padding:25px;
justify-content:space-between;
`
const BigTitle = styled.div`
text-align:center;
font-size:42px;
color:#393E46;
border-top:3px solid #393E46;
border-bottom:3px solid #393E46;
`

const Image = styled.div`
color:#393E46;
display:flex;
flex-directiction:column;
justify-content:center;
align-items:center;
`
const Info = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Title = styled.div`
color:#393E46;
margin-bottom:10px;
`
const Description = styled.div`
text-align:center;
color:#393E46;
`

const Section = styled.div`
margin:10px 30px 0px 25px;
height:20vh;
`

const AllItems = styled.div`
background-color:#e8e8e8;
`

const Introducing = () => {
    return (
        <AllItems>
            <BigTitle>Awesome <b>Features</b></BigTitle>
            <Container>
                <Section>
                    <Info>
                        <Image><Public /></Image>
                        <Title>Access anywhere</Title>
                        <Description>Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><Public /></Image>
                        <Title>Access anywhere</Title>
                        <Description>Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><Public /></Image>
                        <Title>Access anywhere</Title>
                        <Description>Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
            </Container>
            <Container>
                <Section>
                    <Info>
                        <Image><Public /></Image>
                        <Title>Access anywhere</Title>
                        <Description>Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><Public /></Image>
                        <Title>Access anywhere</Title>
                        <Description>Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
                <Section>
                    <Info>
                        <Image><Public /></Image>
                        <Title>Access anywhere</Title>
                        <Description>Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</Description>
                    </Info>
                </Section>
            </Container>
        </AllItems>

    )
}

export default Introducing