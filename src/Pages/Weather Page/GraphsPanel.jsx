import React, { useEffect, useState } from 'react';

import WeatherGraph from './WeatherGraph';

import Loader from '../../Common/Loader/Loader';


export default function GraphsPanel(props) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    }, []);


    return (
        
            <div className="">
                <WeatherGraph Loader={Loader} loading={loading} />
            </div>

    )
}
