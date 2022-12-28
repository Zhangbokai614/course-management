import React from 'react';
import { RouterProvider } from "react-router-dom";
import 'antd/dist/reset.css';

import { router } from './routers';

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
