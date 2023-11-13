import React from 'react';

import preLoader from '../../Common/imgs/Loader.gif';

export default function Loader() {

  const setLoader = {
    margin: 'auto',
  };

  return (

    <div className='d-flex justify-content-center align-items-center'>

      <img src={preLoader} alt="" style={setLoader} />

    </div>

  )
}
