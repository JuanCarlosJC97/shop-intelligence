import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './components/Auth'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NewPassword from './components/newPassword/NewPassword'
/* const stants = [
  { id: "stant-0", name: "Vinos y licores" },
  { id: "stant-1", name: "Higiene Personal" },
  { id: "stant-2", name: "Panaderia" },
  { id: "stant-3", name: "Lacteos y cremeria" }
]; */

ReactDOM.render(
  <React.StrictMode>
    <Auth title="Accede a tu cuenta" />
    {/* <NewPassword title="Usuario"/> */}

  </React.StrictMode>,
  document.getElementById('root')
);
