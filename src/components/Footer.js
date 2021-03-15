import React from 'react';
import config from './config';
import FlexStyled from "./styled/flex";
import WeatherUnit from "./WeatherUnit";

function Footer({weather}) {

    const getWeatherData = () => {
        return config.additionalInfo.map((el) => {
            el.value = el.getData(weather);
            return el;
        });
    };

    return <FlexStyled direction="row" wrap="nowrap">
        {Object.keys(weather).length > 0 && getWeatherData().map((el) => <WeatherUnit {...el} key = {el.id}/>)}
    </FlexStyled>
}

export default Footer;