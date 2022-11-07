import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;