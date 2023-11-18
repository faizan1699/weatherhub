import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <div className="bg-light text-center shadow mb-2 top-bar">
      <Link className='navbar-brand text-uppercase fw-bold fs-2 text-center' to="/">Weather Hub</Link>
    </div>

  )
}
