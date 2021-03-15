import React from 'react';
import FlexStyled from "./styled/flex";

function WeatherUnit({measure, value, name}) {
    return <FlexStyled width="20%" direction="column" className="weatherDataUnit">
        <h5>{name}</h5>
        <div><span>{value}</span> {measure}</div>
    </FlexStyled>
}

export default WeatherUnit;