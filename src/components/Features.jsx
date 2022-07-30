import styled from 'styled-components'
import FeaturesItem from './FeaturesItem';
import {features} from '../Data'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`;

const Features = () => {
  return (
    <Container>
        {features.map((item)=>(
            <FeaturesItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Features