import React, {useState, useRef} from 'react';
import Loader from "./loader";

export default function App() {
    const cityInput = useRef();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchWeatherData = () => {
        setErrorMessage('');
        if (cityInput.current.value) {
            setLoading(true);
            try {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput.current.value}&appid=${process.env.API_KEY}&lang=ru`)
                    .then(data => data.json())
                    .then(data => getWeatherDataHandler(data))
            } catch (error){
                errorHandler(error)
            };
        }
    };

    const errorHandler = (e) => {
        setErrorMessage('You have an error, check your internet connection.');
    };

    const getWeatherDataHandler = (data) => {
        cityInput.current.value = '';
        setLoading(false);
        if(data.message) return setErrorMessage(data.message);
    };

    return <>
        <label htmlFor="cityInput">Enter city</label>
        <input id="cityInput" type="text" ref={cityInput}/>
        <button onClick={fetchWeatherData}>Submit</button>
        {loading && <Loader/>}
        {errorMessage && <h2>{errorMessage}</h2>}
    </>
}

