import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:60px;
background-color:#393E46;
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Logo = styled.div`
font-family: 'Square Peg', cursive;
font-size:32px;
font-weight:600;
cursor:pointer;
color:#00ADB5;
margin-left:10%;
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
color:#EEEEEE;
`

const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end;
`

const MenuItemFirst = styled.div`

`

const MenuItemSecond = styled.div`

`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>OEM</Logo>{/*online exam maker*/}
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Help</MenuItem>
                </Left>
                <Right>
                    <MenuItemFirst>Sign up</MenuItemFirst>
                    <MenuItemSecond>Login</MenuItemSecond>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar