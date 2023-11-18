import React from 'react';

import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function WeatherGraph(props) {

  const limit = 100;
  let y = 90;
  const data = [];
  const dataSeries = { type: "line" };
  const dataPoints = [];

  for (let i = 0; i < limit; i += 1) {
    y += Math.round(Math.random() * 10 - 5);
    dataPoints.push({
      x: i,
      y: y,
    });
  }
  dataSeries.dataPoints = dataPoints;
  data.push(dataSeries);



  const options = {
    zoomEnabled: true,
    animationEnabled: true,
    title: {
      text: "",
    },
    data: data,
  };

  return (
    <div className='card'>

      <div className="card-header shadow ">
        Weather Graph View<a href='/' ><i className="text-dark text-white fa-solid fa-ellipsis-vertical"></i></a>
      </div>
      <div className="card-body">
        {
          props.loading ? (
            < props.Loader />
          ) : (

            <CanvasJSChart options={options} />

          )
        }
      </div>
    </div>
  )
}
