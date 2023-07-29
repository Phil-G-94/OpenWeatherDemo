import { useState, useEffect } from "react";

const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/weather";

const REACT_APP_API_KEY = "421b3ebfd436a06c3bf192243e530f71";

const WeatherQuery = () => {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("");
    const [countryCode, setCountryCode] = useState("");

    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    };

    const countryChangeHandler = (event) => {
        setCountryCode(event.target.value);
    };

    const url = `${REACT_APP_API_URL}?q=${city},${countryCode}&limit=1&units=metric&appid=${REACT_APP_API_KEY}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(
                        "Please ensure you provide a valid city name and country code."
                    );
                }

                const data = await response.json();

                setData(data);

                console.log(data);
            } catch (error) {
                alert(error);
            }
        };

        fetchData();
    }, [url, city, countryCode]);

    return (
        <>
            <section className="mt-10">
                <div>
                    <h2>What city would you like to view the weather for?</h2>
                    <form action="submit">
                        <label
                            className="text-black"
                            htmlFor="city"
                            placeholder="City..."
                        >
                            City
                            <input
                                className="rounded-md m-4 bg-slate-200"
                                type="text"
                                name="city"
                                id="city"
                                onChange={cityChangeHandler}
                            />
                        </label>
                        <label
                            className="text-black"
                            htmlFor="country-code"
                            placeholder="Country Code..."
                        >
                            Country Code (ISO 3166)
                            <input
                                className="rounded-md m-4 bg-slate-200"
                                type="text"
                                name="country-code"
                                id="country-code"
                                onChange={countryChangeHandler}
                            />
                        </label>
                        {/* <button onSubmit={submitEventHandler}>
                            Fetch weather
                        </button> */}
                    </form>
                </div>
            </section>

            <section>
                {typeof data.main != "undefined" ? (
                    <>
                        <h2>Here&apos;s the weather for that location</h2>
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
                            <li>Pressure: {data.main.pressure} mbar</li>
                            <li>Description: {data.weather[0].main}</li>
                            <li>
                                <img
                                    src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                                    alt="weather icon"
                                />
                            </li>
                        </ul>
                    </>
                ) : (
                    <div>
                        <p>
                            Enter the city and country code you want to check
                            the weather for.
                        </p>
                    </div>
                )}
            </section>
        </>
    );
};

export default WeatherQuery;
