import React, { useEffect, useState } from 'react';

export default function LocationCard(props) {

  const [time, setTime] = useState('');
  const data = props.data;

  const weatherData = data[0].weatherData;
  const Loader = data[1].Loader;
  const loading = data[2].loading;
  const setLatLon = data[3].setLatLon;
  const latlon = data[4].latlon;

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (

    <>
      {
        loading ? (
          <Loader />
        ) : (
          <dl className="row">

            <dt className="col-8">Country:</dt>
            <dd id="textForloading" className="col-4 fw-bold small">{weatherData.sys.country}</dd>

            <dt className="col-8">City:</dt>
            <dd className="col-4 fw-bold small">{weatherData.name}</dd>

            <dt className="col-8">Current Time:</dt>
            <dd className="col-4 fw-bold ">{time}</dd>

            <dt className="col-8">Current Date:</dt>
            <dd className="col-4 fw-bold ">{<span className='fw-bold'>{new Date().toLocaleDateString()}</span>}</dd>

            <dt className="col-8">Longitude:</dt>
            <dd className="col-4 small">{weatherData.coord.lon}</dd>

            <dt className="col-8">Latitude:</dt>
            <dd className="col-4 small">{weatherData.coord.lat}</dd>

            <dt className="col-8">sunrise:</dt>
            <dd className="col-4 small">{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</dd>

            <dt className="col-8">Sun Set:</dt>
            <dd className="col-4 small">{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</dd>

            <dt className="col-8">Timezone:</dt>
            <dd className="col-4 small">{new Date(weatherData.timezone * 1000).toLocaleTimeString()}</dd>

          </dl>
        )}

    </>

  );
}
