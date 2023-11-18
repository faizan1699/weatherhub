import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {

    const [pathname, setPathname] = useState('');

    const setPathnames = () => {
        const pathname = window.location.pathname;
        setPathname(pathname.slice(1));

    }

    useEffect(() => {
        setPathnames();
    }, []);

    return (
        <div className="my-5 " >
            <div className="col-md-8 mx-auto text-center">
                <h1 className="display-1 fw-bold ">404 - Not Found</h1>
                <p className="lead"><span className='fw-bold text-danger'>{pathname}</span> page doesn't exist.</p>
                <Link to="/" className="btn btn-danger text-light border-0 rounded-0 small btn-outline-success fw-bold">
                    Go to Home
                </Link>
            </div>
        </div>
    )
}
