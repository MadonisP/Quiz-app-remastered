import styled from 'styled-components'
import Footer from '../components/Footer'
import LoginNavbar from '../components/LoginNavbar'

const Container = styled.div`

`
const Wrapper = styled.div`

`
const Form = styled.form`

`
const Input = styled.input`

`

const Configure = () => {
  return (
    <>
    <LoginNavbar/>
        <Container>
            <Wrapper>
                <Form>
                    <Input/>{/*Name */}
                    <Input/>{/*Time */}
                    <Input/>{/*Grade */}
                </Form>
            </Wrapper>
        </Container>
        <Footer/>
    </>
  )
}

export default Configure