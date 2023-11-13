import React, { useEffect, useState } from 'react';

export default function CitySearch(props) {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [error , setError] = useState(null);

    const cityData = props.cityData;

    const setshowCard = cityData[0].setshowCard;
    const setCity = cityData[1].setCity;
    const showAlert = cityData[2].showAlert;

    const getCityName = (e) => {

        const input0 = e.target[0].value;
        const input1 = e.target[1].value;

        const input = `${input0} ${input1}`;


        e.preventDefault();

        if (latitude || longitude) {

            setshowCard(true);
            setCity(input);

        } else {
            showAlert('pls add correct lat lan', 'warning')

        }
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
              },
              (error) => {
                console.error('Error getting geolocation:');
                setError('Error getting geolocation');
              }
            );
          } else {
            setError('Geolocation is not supported by your browser');
          }
        // navigator.geolocation.getCurrentPosition(
        //     position => {
        //         const { latitude, longitude } = position.coords;
        //         setLatitude(latitude);
        //         setLongitude(longitude);
               
        //     },
        //     error => {console.log('Error getting location:', error.message); }
        // );
    } , []);
    

    return (

        <form id='cardsForm' onSubmit={getCityName}>
            <div>{latitude} lat</div>
            <div>{longitude} lon</div>
            <div></div>

                <div className='text-danger fa-fade mb-2 fw-bold'>Enter Your Desired city below <i className="fa-solid fa-arrows-down-to-line"></i> </div>

            <div className="input-group mb-3 d-flex justify-content-center shadow" id='citySearch'>

                <input className="getCityInput small form-control" value={longitude} onChange={(e) => setLongitude(e.target.value)} type="number" placeholder="longitude ..." />
                <input className="getCityInput small form-control" value={latitude} onChange={(e) => setLatitude(e.target.value )} type="number" placeholder="latitude ..." />

                <div className="input-group-append">
                    <button type="submit" className="small py-2 px-md-3 search-btn  btn">
                        Search <i className="fas fa-search"></i>
                    </button>
                </div>

            </div>
        </form>
    );
}
