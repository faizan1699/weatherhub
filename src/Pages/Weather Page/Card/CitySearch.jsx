import React, { useEffect, useState, useRef } from 'react';

export default function CitySearch(props) {

    const [suggestion, setSuggestion] = useState(true);
    const [queryparam, setQueryparams] = useState('');

    const cityData = props.cityData;
    const btnRef = useRef(null);

    const setshowCard = cityData[0].setshowCard;
    const setCity = cityData[1].setCity;
    const showAlert = cityData[2].showAlert;

    const getCityName = (e) => {

        const input = e.target[0].value;
        e.preventDefault();

        const specialChar = /[!@#$%^&*()_+''":;.,<-_/>/|\]{}~]/;

        if (isNaN(input.length < 5)) {
            showAlert('pls write correct city name', 'warning');
        }
        else if (input === '' || input.lenght <= 4) {
            showAlert('Write city name in text field', 'info');
        }

        else if (!isNaN(input)) {
            showAlert(input + ' is not city name', 'warning');
        }

        else if (specialChar.test(input.charAt(1))) {
            showAlert('Special characters are Not Allowed', 'danger');
        }

        else if (!isNaN(input.charAt(isNaN))) {
            showAlert('numbers are not allowed', 'danger');

        } else if (input.length < 5 || input.length > 14) {
            showAlert('Check your spelling or City name', 'danger');
        } else {

            setshowCard(true);
            setCity(input);
            setSuggestion(false);

            document.title = input;

            const newUrl = `${window.location.pathname}?city=${encodeURIComponent(input)}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        }
    }


    useEffect(() => {
        const currentSearchParams = window.location.search;
        const updatedSearchString = currentSearchParams.slice(6);
        setQueryparams(updatedSearchString);

        const input = document.getElementsByClassName('getCityInput');

        if (input.length < 5) {
            setTimeout(() => {
                btnRef.current.click();
            }, 1000);
        } else {}

    }, []);

    return (

        <form id='cardsForm' onSubmit={getCityName}>

            {suggestion && <div className='text-danger fa-fade mb-2 fw-bold'>Enter Your Desired city below <i className="fa-solid fa-arrows-down-to-line"></i> </div>}

            <div className="input-group mb-3 d-flex justify-content-center shadow" id='citySearch'>

                <input className="getCityInput small form-control " type="text" id='input' name='city' value={queryparam} onChange={(e) => setQueryparams(e.target.value)} placeholder="Enter Your Desired City ..." />

                <div className="input-group-append">
                    <button ref={btnRef} type="submit" className="small py-2 px-md-3 search-btn  btn">
                        Search <i className="fas fa-search"></i>
                    </button>
                </div>

            </div>
        </form>
    );
}
