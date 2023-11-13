import React from 'react'

import ProjectCard from './ProjectCard'

export default function ProjectCardApi(props) {

  const projectCardData = [
    
    { CardText: 'Server migration', value: 100 , progressBg: 'danger' },
    { CardText: 'Sales Tracking', value: 2  , progressBg: 'warning'},
    { CardText: 'Customer Details', value: 56 , progressBg: 'primary' },
    { CardText: 'PayOut Details', value:78 , progressBg: 'info' },
    { CardText: 'Account Setup', value: 34 , progressBg: 'secondary' },
    { CardText: 'Payment Details', value:78 , progressBg: 'info' },
    { CardText: 'Account management', value: 34 , progressBg: 'dark' }

  ]


  return (

      <div className="mx-2 mb-2">

        {
          projectCardData.map((item, index) => (
            
              <ProjectCard  key={index} data={item} />
            
          ))
        }

      </div>
  
  )
}
