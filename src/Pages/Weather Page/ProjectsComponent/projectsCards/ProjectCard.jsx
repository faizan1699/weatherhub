import React from 'react'

export default function ProjectCard(props) {
  return (
    <>

      <div className="d-flex  justify-content-between ">

        <span className='mt-2 mb-1'>{props.data.CardText}</span>
        <h6>{props.data.value} %</h6>

      </div>

      <div className="progress p-0 " role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">

        <div className={`progress-bar bg-${props.data.progressBg}`} style={{ width: `${props.data.value}%` }}></div>

      </div>

    </>
  )
}
