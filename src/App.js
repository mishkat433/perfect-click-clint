import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-photo-view/dist/react-photo-view.css';
import AuthProvider from './Contex/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])
  return (
    <div>
      <ToastContainer />
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;