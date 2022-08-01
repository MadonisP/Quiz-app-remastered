import styled  from 'styled-components'
import { Link } from "react-router-dom";
import { Help, Logout } from '@mui/icons-material';

const Container = styled.div`
height:60px;
background-color:#393E46;
`

const Wrapper = styled.div`
padding:0px 20px;
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
padding:10px 12px;
`

const MenuItem = styled.button`
font-size: 14px;
cursor: pointer;
background-color: #393E46;
color:#EEEEEE;
padding:20px 12px;
border:none;
&:hover {
    background-color: #222831;
  }
`

const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end;
`

const MenuItemFirst = styled.div`
width:80px;
margin-right:10%;
cursor: pointer;
color:#B5B5B6;
padding:10px;
&:hover {
    color: #EEEEEE;
  }
`

const MenuItemSecond = styled.div`
cursor: pointer;
color:#B5B5B6;
padding:10px;
&:hover {
    color: #EEEEEE;
  }
`


const LoginNavbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>OEM</Logo>{/*online exam maker*/}
                    <Link to="/dashboard">
                        <MenuItem>Dashboard</MenuItem>
                    </Link>
                    <MenuItem>Reports</MenuItem>
                </Left>
                <Right>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <MenuItemSecond><Help style={{verticalAlign:"middle"}}/></MenuItemSecond>
                    </Link>
                    <Link to="/register" style={{ textDecoration: "none", marginRight: "10%" }}>
                        <MenuItemFirst><Logout style={{verticalAlign:"middle"}}/> Logout</MenuItemFirst>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
  )
}

export default LoginNavbar