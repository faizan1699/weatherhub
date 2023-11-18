import React from 'react';

export default function WetherCondition(props) {

    var data = props.data;

    const weatherData = data[0].weatherData;
    var Loader = data[1].Loader;
    var loading = data[2].loading;

    return (

        <>
            {
                loading ? (
                    <Loader />
                ) : (

                    <dl className="row">

                        <dt className="col-8">Temperature: </dt>
                        <dd className="col-4 small">{weatherData.main.temp} <sup className='fw-bold'>o</sup>C</dd>

                        <dt className="col-8">Min Temperature:</dt>
                        <dd className="col-4 small ">{weatherData.main.temp_min} <sup className='fw-bold'>o</sup>C</dd>

                        <dt className="col-8">Max Temperature: </dt>
                        <dd className="col-4 small">{weatherData.main.temp_max} <sup className='fw-bold'>o</sup>C</dd>

                        <dt className="col-8">Weather:  </dt>
                        <dd className="col-4 small"> {weatherData.weather.map(description => description.main)} </dd>

                        <dt className="col-8">Wind Speed:</dt>
                        <dd className="col-4 small">{weatherData.wind.speed} KM/H</dd>

                        <dt className="col-8">Wind Gust:</dt>
                        <dd className="col-4 small">{!weatherData.wind.gust ? 'not found' : weatherData.wind.gust}</dd>

                        <dt className="col-8">Wind Direction:</dt>
                        <dd className="col-4 small">{weatherData.wind.deg}<sup>o</sup></dd>

                        <dt className="col-8">Clouds:</dt>
                        <dd className="col-4 small">{weatherData.clouds.all}</dd>

                    </dl>

                )}
        </>

    );
}