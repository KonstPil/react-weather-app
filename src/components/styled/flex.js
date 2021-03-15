import styled from 'styled-components';

const FlexStyled = styled.div`
    display: flex;
    flex-wrap: ${props => props.wrap || 'wrap'};
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'center'};
    align-content: center;
    justify-content: ${props => props.justify || 'center'};
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || '100%'}
`;

export default FlexStyled;