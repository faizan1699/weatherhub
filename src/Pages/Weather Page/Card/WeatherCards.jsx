import React, { useEffect, useRef, useState } from 'react';

import Bylatlon from './Bylatlon';
import CitySeacrh from './CitySearch';

import Humadity from './Cards/Humadity';
import LocationCard from './Cards/LocationCard';
import WeatherCondition from './Cards/WeatherCondition';

import Loader from '../../.././Common/Loader/Loader';
import CircleLoader from '../../../Common/Loader/CircleLoader';

import { getDataFromWeather } from '../../../services/WeatherApi';
import { getWeatherData  } from '../../../services/WeatherApi';

export default function WeatherCards(props) {

    const stringData = 'Add city name for';
    const showAlert = props.showAlert;

    const [lat, setLat] = useState(29.4433);
    const [lon, setLon] = useState(71.6833);
    const [city, setCity] = useState(false);
    const [input, setInput] = useState(true);
    const [latlon, setLatLon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    const [showCard, setshowCard] = useState(false);
    const [location, setbyLocation] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {

        getDataFromWeather(city).then(res => {
            const data = res.data;
            setWeatherData(data);
            setLoading(false);

        }).catch((err) => {
            setshowCard(false);
            setLoading(false);
            showAlertRef.current("check your city name", "warning");
        });

        setAnimate(true);  // for card animation onload

    }, [city]);
    const showAlertRef = useRef(showAlert);

    useEffect(() => {
        getWeatherData(lat, lon).then(res => {
            const data = res.data;
            setWeatherData(data);
            setLatLon(data);
            setLoading(false);

        }).catch((err) => {
            setshowCard(false);
            setLoading(false);
        });

    }, [lat, lon]);

    var data = [

        { weatherData: weatherData },
        { Loader: Loader },
        { loading: loading },
        { setLatLon: setLatLon },
        { latlon: latlon }

    ]; // for Get Weather Data by longitude and latitude

    const cityData = [
        { setshowCard: setshowCard },
        { setCity: setCity },
        { showAlert: showAlert }
    ];  // for get weatherData by cityName

    const setByLatLon = [
        { setLat: setLat },
        { setLon: setLon },
        { showAlert: showAlert },
        { setshowCard: setshowCard }
    ];

    const handleInput = () => {
        setbyLocation(false);
        setInput(true);
    };

    const handleLocation = () => {
        setbyLocation(true);
        setInput(false);
    };

    return (
        <>
            {input && <CitySeacrh cityData={cityData} />}
            {location && <Bylatlon setByLatLon={setByLatLon} />}

            {/* For Radio btn */}

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                <input type="radio" className="btn-check" onClick={handleInput} name="btnradio" id="btnradio1" autoComplete="off" />
                <label className="btn btn-outline-dark border-light p-1 radiobtnforinput" htmlFor="btnradio1">use city name</label>

                <input type="radio" className="btn-check" onClick={handleLocation} name="btnradio" id="btnradio3" autoComplete="off" />
                <label className="btn btn-outline-dark border-light p-1 radiobtnforinput" htmlFor="btnradio3">use Loction</label>

            </div>

            { /* Cards */}

            <div className="row gx-1">
                <div className="col-lg-4 col-12 ">
                    <div className={`card my-2 ${animate ? 'animate' : ''}`} >

                        <h5 className=" card-header shadow" >
                            Location <i className="fa-solid fa-location-dot mt-1" ></i>
                        </h5>

                        <div className="card-body" id="LocationCardLi">
                            {!showCard ? <div className='text-danger fw-bold small d-flex' >{stringData} Location data ...
                                <span className='mx-2'>
                                    <CircleLoader /></span></div> : <LocationCard data={data} />
                            }
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-12 ">
                    <div className={`card my-2 ${animate ? 'animate' : ''}`}>

                        <h5 className='card-header shadow' >Weather Condition
                            <i className="fa-solid mt-1 fa-temperature-low" ></i>
                        </h5>

                        <div className="card-body" id='tempratureCard'>
                            {!showCard ? <div className='text-danger fw-bold d-flex small' > {stringData} weather condition ...
                                <span className='mx-2'><CircleLoader /></span> </div> : <WeatherCondition data={data}/>}
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-12 ">
                    <div className={`card my-2 ${animate ? 'animate' : ''}`}>

                        <h5 className='card-header shadow'> Humadity
                            <i className="fa-solid mt-1 fa-solid fa-snowflake" ></i>
                        </h5>

                        <div className="card-body" id='tempratureCard'>
                            {!showCard ? <span className='text-danger fw-bold d-flex small'> {stringData} weather humadity ...
                                <span className='mx-2'><CircleLoader /></span> </span> : <Humadity data={data} />}
                        </div>

                    </div>
                </div> 
            </div>
        </>
    )
}
