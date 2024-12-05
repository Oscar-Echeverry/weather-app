import React, { useState } from 'react';
import './WeatherApp.css';
import logo from './assets/logo.png';

export const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '9c498930928348e55806ca68d7c706ec';
    const Kelvin = 273.15;

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const fetchWeather = async (city) => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`);
            if (!response.ok) throw new Error("Ciudad no encontrada");
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    const fetchWeatherByCoordinates = async (lat, lon) => {
        try {
            const response = await fetch(`${urlBase}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es`);
            if (!response.ok) throw new Error("No se pudo obtener datos climáticos.");
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
        } else {
            setError("Ingrese una ciudad válida.");
        }
    };

    const handleMicrophone = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.onresult = (event) => {
            const transcriptCity = event.results[0][0].transcript;
            setCity(transcriptCity);
            fetchWeather(transcriptCity);
        };
        recognition.start();
    };

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherByCoordinates(latitude, longitude);
                },
                () => {
                    setError("No se pudo obtener la ubicación.");
                }
            );
        } else {
            setError("La geolocalización no es compatible con este navegador.");
        }
    };

    const renderWeatherData = () => {
        if (!weatherData) return null;

        const { name, sys, main, weather } = weatherData;
        const temperature = Math.floor(main.temp - Kelvin);
        const humidity = main.humidity;
        const description = weather[0].description;
        const icon = weather[0].icon;

        return (
            <div id="Respuesta_Datos" className="Resultado">
                <h2>{`${name}, ${sys.country}`}</h2>
                <p>{`La temperatura es: ${temperature}ºC`}</p>
                <p>{`La humedad es del ${humidity}%`}</p>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
                <p>{`Descripción meteorológica: ${description}`}</p>
            </div>
        );
    };

    return (
        <div className="container">
            <img src={logo} alt="Logo de la App" className="app-logo" />
            <div className="input-container">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        id="Ciudad"
                        placeholder="Buscar ciudad"
                        value={city}
                        onChange={handleCityChange}
                    />
                    <button id="BuscarBoton" type="submit">🔍</button>
                    <button id="MicrofonoBoton" type="button" onClick={handleMicrophone}>🎙️</button>
                    <button id="UbicacionBoton" type="button" onClick={handleLocation}>📍</button>
                </form>
            </div>
            {error && <div className="error">{error}</div>}
            {renderWeatherData()}
        </div>
    );
};
