import styled from 'styled-components'

const Container = styled.div`
height:100vh;
background: #1A1A1A;
font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
overflow: hidden;
color: #EEEEEE;
&:after ,  &:before{
  content: '404';
  position: absolute;
  font-size: 100px;
  left: 0;right: 0;
  text-align: center;
  bottom: 340px;
  font-weight: 600;
}
&:before{
  content: 'Page Not Found';
  font-size: 22px;
  font-weight: 400;
  bottom: 330px;
}
}



`
const NotFound = () => {
    return (
        <Container/>
    )
}

export default NotFound