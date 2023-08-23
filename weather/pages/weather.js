import React, { useState, useEffect } from "react";

const weather = () => {
    const [query, setQuery] = useState("");
    const [delhi, setdelhi] = useState();
    const [london, setlondon] = useState();
    const [nyc, setnyc] = useState();
    const [w, setWeather] = useState();
    const fetchWeather = async (query) => {
        let weather = await fetch(
            "http://api.weatherapi.com/v1/current.json?key=d3fedac13bed4ea7a7461047230608&q=" +
            query
        );
        let response = weather.json();
        // console.log(response)
        return response;
    };
    useEffect(() => {
        async function fetchData() {
            let delhi = await fetchWeather("New Delhi");
            setdelhi(delhi);
            let london = await fetchWeather("London");
            setlondon(london);
            let nyc = await fetchWeather("New York");
            setnyc(nyc);
        }
        fetchData();
    }, []);
    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    const handleClick = (e) => {
        console.log(query);
        let w = fetchWeather(query);
        setWeather(w);
    };

    return (
        <div className="container mx-auto bg-red-50">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-violet-500 font-medium title-font text-2xl mb-2 sm:mb-0">
                                WeatherApp-Weather at Fingertips
                            </h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                                Search for the location and get the most accurate weather.
                            </p>
                            <div className="w-full flex">
                                <input
                                    value={query}
                                    onChange={handleChange}
                                    className="w-full border border-black rounded-lg mt-4 h-10 file: px-2 file: font-semibold file: text-purple-700 file: bg-gray-100"
                                    type="text"
                                    name="search"
                                    id="search"
                                />
                                <button
                                    onClick={handleClick}
                                    className="text-white bg-purple-500 border-0 h-10 mt-4 mx-3  px-6 focus:outline-none hover:bg-purple-600 rounded-lg"
                                >
                                    Search
                                </button>
                            </div>
                            {weather && (
                                <div className="flex justify-items-center al mt-8 w-screen">
                                    The Weather of {query} is {query && weather.current.temp_c}
                                    &#8451;
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src="https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                                New Delhi ({delhi && delhi.current.temp_c}&#8451;)
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                                {delhi && (
                                    <div>
                                        The weather in New Delhi is {delhi.current.temp_c} and Wind
                                        Speed is {delhi.current.wind_mph}
                                    </div>
                                )}
                            </p>
                            <a className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                                London ({london && london.current.temp_c}&#8451;)
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                                {london && (
                                    <div>
                                        The weather in London is {london.current.temp_c} and Wind
                                        Speed is {london.current.wind_mph}
                                    </div>
                                )}
                            </p>
                            <a className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src="https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                                New York({nyc && nyc.current.temp_c}&#8451;)
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                                {nyc && (
                                    <div>
                                        The weather in New york is {nyc.current.temp_c} and Wind
                                        Speed is {nyc.current.wind_mph}
                                    </div>
                                )}
                            </p>
                            <a className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default weather;
