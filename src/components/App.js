import React, {useState} from 'react';
import '../styles/main.css';
import Head from "./Head";
import Main from "./Main";
import Footer from "./Footer";
import config from './config';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [weather, setWeather] = useState({});
    const [showInput, setShowInput] = useState(true);

    const fetchWeatherData = (reqStr) => {
        if (reqStr) {
            setErrorMessage('');
            setLoading(true);
            try {
                fetch(`${config.apiURLBase}${reqStr}&appid=${process.env.API_KEY}&lang=ru&units=metric`)
                    .then(data => data.json())
                    .then(data => getWeatherDataHandler(data))
            } catch (error){
                errorHandler(error)
            };
        }
    };

    const errorHandler = (e) => {
        setLoading(false);
        setErrorMessage('You have an error, check your internet connection.');
    };

    const getWeatherDataHandler = (data) => {
        setLoading(false);
        if(data.message) return setErrorMessage(data.message);
        setWeather(data);
        setShowInput(false);
    };

    const fetchWeatherDataByGeolocation = () => {
        const successGeolocationRequest = (data) => {
            const reqStr = `lat=${data.coords.latitude}&lon=${data.coords.longitude}`;
            fetchWeatherData(reqStr)
        };
        navigator.geolocation.getCurrentPosition(successGeolocationRequest)
    };

    const fetchWeatherDataByCityName = (cityName) => {
        const reqStr = `q=${cityName}`;
        fetchWeatherData(reqStr);
    };

    const changeCity = () =>{
        setShowInput(true);
    };

    return (
        <div className="container">
            <Head {...{fetchWeatherDataByCityName, fetchWeatherDataByGeolocation, weather, showInput, changeCity}}/>
            <Main {...{loading, errorMessage, weather}}/>
            {!errorMessage && !loading && <Footer weather = {weather}/>}
        </div>
    );
}

