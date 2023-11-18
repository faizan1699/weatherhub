import React, { useEffect, useState } from 'react';

export default function CitySearch(props) {

    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongitude] = useState([]);

    const LatLon = props.setByLatLon;

    const setLat = LatLon[0].setLat;
    const setLon = LatLon[1].setLon;
    const showAlert = LatLon[2].showAlert;
    const setshowCard = LatLon[3].setshowCard;

    const getCityName = (e) => {

        const input0 = e.target[0].value;
        const input1 = e.target[1].value;

        e.preventDefault();

        if (latitude || longitude) {
            setshowCard(true);
            setLat(input0);
            setLon(input1);
        } else { showAlert('Check latitude longitude', 'warning') }
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    // alert('Error getting geolocation:');
                    // showAlert('Give Location access to Weather Hub' , 'info');
                }
            );
        } else {
            // showAlert('Geolocation is not supported by your browser' , 'warning');
        }
    }, []);


    return (

        <form id='cardsForm' onSubmit={getCityName}>
            <div></div>

            <div className='text-danger fa-fade mb-2 fw-bold'>Enter Your Longitude & Latitude  <i className="fa-solid fa-arrows-down-to-line"></i> </div>

            <div className="input-group mb-3 d-flex justify-content-center shadow" id='citySearch'>

                <input className="getCityInput small form-control" value={longitude} onChange={(e) => setLongitude(e.target.value)} type="number" placeholder="longitude ..." />
                <input className="getCityInput small form-control" value={latitude} onChange={(e) => setLatitude(e.target.value)} type="number" placeholder="latitude ..." />

                <div className="input-group-append">
                    <button type="submit" className="small py-2 px-md-3 search-btn  btn">
                        Search <i className="fas fa-search"></i>
                    </button>
                </div>

            </div>
        </form>
    );
}
