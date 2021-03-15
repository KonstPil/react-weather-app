import React from 'react';
import Loader from "./styled/loader";
import FlexStyled from "./styled/flex";
import WeatherIcon from "./styled/weatherIcon";

function Main({loading, errorMessage, weather: {weather, main}}) {

    const getWeatherDescription = () => {
        const str = weather[0].description;
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return <FlexStyled className="block" id="mainBlock">
        {loading && <Loader/>}
        {errorMessage && <h2>{errorMessage}</h2>}
        {
            weather && !errorMessage && !loading &&
            <div>
                <FlexStyled>
                    <WeatherIcon icon = {weather[0].icon}></WeatherIcon>
                    <div id="mainTemp">{Math.round(main.temp)} &#8451;</div>
                </FlexStyled>
                <h4 id="weatherDesc">{getWeatherDescription()}</h4>
            </div>
        }
    </FlexStyled>
}

export default Main;