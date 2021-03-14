import React from 'react';
import SearchField from "./SearchField";
import FlexStyled from "./styled/flex";

function Head({fetchWeatherDataByCityName, fetchWeatherDataByGeolocation, changeCity, showInput, weather: {name}}) {

    return <FlexStyled id="headBlock">
        {showInput ?
            <SearchField fetchWeatherData = {fetchWeatherDataByCityName} /> :
            <FlexStyled direction="column">
                <h1>{name}</h1>
                <button onClick={changeCity}>Сменить город</button>
            </FlexStyled>
        }
        <p onClick={fetchWeatherDataByGeolocation}><span className="geolocation-icon"></span>Моё местоположение</p>
    </FlexStyled>
};

export default Head;