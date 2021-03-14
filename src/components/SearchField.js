import React, {useRef} from 'react';
import FlexStyled from "./styled/flex";

function SearchField({fetchWeatherData}) {
    const cityInput = useRef();

    const clickHandler = () => {
        fetchWeatherData(cityInput.current.value);
        cityInput.current.value = '';
    };

    return (
        <FlexStyled direction="column" id="searchField">
            <input id="cityInput" type="text" ref={cityInput} placeholder="Enter city name"/>
            <button onClick={clickHandler}>Получить прогноз</button>
        </FlexStyled>
    );
}

export default SearchField;