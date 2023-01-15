import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { Trabalhista } from './pages/trabalhista/Trabalhista'
import { Previdenciario } from './pages/previdenciario/Previdenciario'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/Trabalhista",
    element: <Trabalhista />,
  },
  {
    path: "/Previdenciario",
    element: <Previdenciario />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
