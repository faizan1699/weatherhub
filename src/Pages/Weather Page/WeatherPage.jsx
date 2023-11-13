import React from 'react';

import WeatherCards from './Card/WeatherCards';
import GraphsPanel from './GraphsPanel';
import Projects from './ProjectsComponent/Projects';

export default function Main(props) {
    
    const showAlert = props.showAlert;

    return (
        <>
            <div className="row g-0">
                <div className="col-12">
                    <WeatherCards showAlert={showAlert} />
                </div>
            </div>

            <div className="row g-1"> 
                <div className="col-md-6">
                    <GraphsPanel />
                </div>

                <div className="col-md-6">
                    <Projects />
                </div>

            </div>
        </>

    )
}
