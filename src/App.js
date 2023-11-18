import { useState } from 'react';

import Alert from './Common/Alert/Alert';
import WeatherPage from './Pages/Weather Page/WeatherPage';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Topbar/Navbar';
import Eror404 from './Pages/Eror404/Eror404';

import { Route, Routes } from 'react-router-dom';

export default function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      message: message,
      type: type

    });

    setTimeout(() => {
      setAlert(null);
    }, 4000)
  }

  return (

    <div className="g-0">
      <div className="container-md">

        <div className="row">
          <Navbar />
          <div className="g-0">
            <div className="px-2">

              <Alert alert={alert} />

              <Routes>
                <Route path='*' element={<Eror404 />} />
                <Route path='/' element={<WeatherPage showAlert={showAlert} />} />
              </Routes>

            </div>

            <Footer />

          </div>
        </div>
      </div>
    </div>

  );
}