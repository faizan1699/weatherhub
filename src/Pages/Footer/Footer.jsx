import React from 'react';

export default function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (

    <div className='mt-3 py-2 footer'>
      <div className='text-center fw-bold'>Copyright &#169; Weather HuB {currentYear} <span className="small">All right reserved</span></div>
    </div>

  )
}
