import styled from 'styled-components';

const WeatherIcon = styled.div`
    background-image: url("./icons/${props => props.icon || 'unknown'}.png");
    background-size: cover;
    width: 250px;
    height: 250px;
`;

export default WeatherIcon;