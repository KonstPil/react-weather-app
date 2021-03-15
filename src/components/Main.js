import React from 'react';
import Loader from "./styled/loader";
import FlexStyled from "./styled/flex";
import WeatherIcon from "./styled/weatherIcon";

function Main({loading, errorMessage, weather: {weather, main}}) {

    return <FlexStyled className="block" id="mainBlock">
        {loading && <Loader/>}
        {errorMessage && <h2>{errorMessage}</h2>}
        {
            weather && !errorMessage && !loading &&
            <div>
                <FlexStyled>
                    <WeatherIcon icon = {weather[0].icon}></WeatherIcon>
                    <div>{main.temp}</div>
                </FlexStyled>
                <h4>{weather[0].description}</h4>
            </div>
        }
    </FlexStyled>
}

export default Main;