import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`;

const Features = () => {
  return (
    <Container>
        {Features.map((item)=>(
            <FeaturesItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Features