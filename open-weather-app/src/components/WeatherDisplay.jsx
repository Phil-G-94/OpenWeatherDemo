import { useEffect, useState, useCallback } from "react";

const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/weather";

const REACT_APP_API_KEY = "762fa4a9b403c8a3c74281817629f55d";

const WeatherDisplay = () => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });

        const url = `${REACT_APP_API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${REACT_APP_API_KEY}`;

        // console.log(url);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong.");
            }

            const data = await response.json();

            console.log(data);

            setData(data);
        } catch (error) {
            console.log(error);
        }
    }, [lat, lon]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <section className="mt-10">
            <h2>Here&apos;s the weather for your location</h2>
            {typeof data.main != "undefined" ? (
                <>
                    <ul className="mt-10">
                        <li>
                            Location: {data.name}, {data.sys.country}
                        </li>
                        <li>
                            Temp: {data.main.temp} {"\xB0"} C
                        </li>
                        <li>
                            Max temp: {data.main.temp_max} {"\xB0"} C
                        </li>
                        <li>
                            Min temp: {data.main.temp_min} {"\xB0"} C
                        </li>
                        <li>
                            Feels like: {data.main.feels_like} {"\xB0"} C
                        </li>
                        <li>
                            Humidity: {data.main.humidity} g/m<sup>3</sup>
                        </li>
                        <li> Pressure: {data.main.pressure} mbar</li>
                        <li> Description: {data.weather[0].main}</li>
                        <li>
                            <img
                                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                                alt="weather icon"
                            />
                        </li>
                    </ul>
                </>
            ) : (
                <div>Loading weather data...</div>
            )}
        </section>
    );
};

export default WeatherDisplay;
