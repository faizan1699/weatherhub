import React from 'react';

import dottedLoader from '../../Common/imgs/dotLoader.gif';

export default function CircleLoader() {

  const setImg = {
    width: '30px'
  }

  return (

    <div className='d-flex justify-content-center align-items-center' >
        <img className='' src={dottedLoader} alt="" style={setImg} />
    </div>

  )
}
