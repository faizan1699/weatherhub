import React, { useEffect, useState } from 'react';

import Bylatlon from './Bylatlon';
import Humadity from './Cards/Humadity';
import LocationCard from './Cards/LocationCard';
import WeatherCondition from './Cards/WeatherCondition';
import CitySeacrh from './CitySearch';

import Loader from '../../.././Common/Loader/Loader';
import CircleLoader from '../../../Common/Loader/CircleLoader';
import { GetDataFromWeatherlat, getDataFromWeather } from '../../../services/WeatherApi';

export default function WeatherCards(props) {

    const stringData = 'Add city name for';
    const showAlert = props.showAlert;

    const [lat] = useState(null);
    const [lon] = useState(null);
    const [city, setCity] = useState(false);
    const [input, setInput] = useState(true);
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    const [showCard, setshowCard] = useState(false);
    const [location, setbyLocation] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const showCityinput = [
        { setInput: setInput },
        { setbyLocation: setbyLocation }
    ];

    useEffect(() => {

        getDataFromWeather(city).then(res => {
            const data = res.data;
            setWeatherData(data);
            setLoading(false);

        }).catch((err) => {
            setshowCard(false);
            setLoading(false);
            showAlert("check your city name", "warning");
        });

        setAnimate(true);
    }, [city]);

    useEffect(() => {
        GetDataFromWeatherlat(lat, lon).then(res => {
            const latdata = res.data;
            setWeatherData(latdata);
            setLoading(false);

        }).catch((err) => {
            setshowCard(false);
            setLoading(false);
        });
    }, [lat, lon])

    var data = [
        { setWeatherData: setWeatherData },
        { weatherData: weatherData },
        { Loader: Loader },
        { loading: loading },
    ];

    const sendCity = [
        { setshowCard: setshowCard },
        { setCity: setCity },
        { showAlert: showAlert }
    ];
    const cityData = sendCity;

    const handleInput = () => {
        setbyLocation(false);
        setInput(true)
    };

    const handleLocation = () => {
        setbyLocation(true);
        setInput(false)
    };

    return (
        <>

            {input ? <CitySeacrh showCityinput={showCityinput} cityData={cityData} /> : null}
            {location ? <Bylatlon cityData={cityData} /> : null}

            {/* For Radio btn */}
         
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          
                <input type="radio" className="btn-check" onClick={handleInput} name="btnradio" id="btnradio1" autocomplete="on" />
                <label className="btn btn-outline-warning p-1 radiobtnforinput" htmlFor="btnradio1">use city name</label>

                <input type="radio" className="btn-check" onClick={handleLocation} name="btnradio" id="btnradio3" autocomplete="off" />
                <label className="btn btn-outline-warning p-1 radiobtnforinput" htmlFor="btnradio3">use Loction</label>
          
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
                                <span className='mx-2'><CircleLoader /></span></div> : <LocationCard data={data} />}
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
                                <span className='mx-2'><CircleLoader /></span> </div> : <WeatherCondition data={data} />}
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
                                <span className='mx-2'><CircleLoader /></span> </span> : < Humadity data={data} />}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
