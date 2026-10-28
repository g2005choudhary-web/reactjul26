import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Aboutpage,{Abc, Student, Companyinfo} from './pages/About';
import Bootstrappage from './pages/Bootstrappage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Aboutpage/>
   <Abc/>
   <Student/>
   <Companyinfo/>
   <Bootstrappage/>
  </React.StrictMode>
);

