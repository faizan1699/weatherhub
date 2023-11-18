
import React from 'react';

export default function Humadity(props) {

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

            <dt className="col-8">humidity : </dt>
            <dd className="col-4 small">{weatherData.main.humidity} %</dd>

            <dt className="col-8">Feels like : </dt>
            <dd className="col-4 small">{weatherData.main.feels_like}</dd>

            <dt className="col-8">Sea level : </dt>
            <dd className="col-4 small">{!weatherData.main.sea_level ? 'not found' : weatherData.main.sea_level}</dd>

            <dt className="col-8">Grnd level : </dt>
            <dd className="col-4 small">{!weatherData.main.grnd_level ? 'not found' : weatherData.main.grnd_level}</dd>

            <dt className="col-8">Pressure : </dt>
            <dd className="col-4 small">{weatherData.main.pressure}</dd>

            <dt className="col-8">Visibility: </dt>
            <dd className="col-4 small">{weatherData.visibility / 1000}</dd>

          </dl>
        )
      }

    </>
  )
}
