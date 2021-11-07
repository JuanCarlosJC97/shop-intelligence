import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './components/Auth';
import Register from './components/register/Register';
import RestorePass from './components/restorePass/RestorePass';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NewPassword from './components/newPassword/NewPassword'
/* const textos = [
  { title: "Accede a tu cuenta", buttonUno: "Registrarse", buttonDos: "Iniciar Sesión", place1:"Nombre de usuario", place2: "Contraseña"}
]; */
/* const textos = [
  { title: "Registrate con nosotros", buttonUno: "Iniciar Sesión", buttonDos: "Registrarse", 
  place1:"Nombre de usuario", place2: "Correo electronico", place3: "Contraseña"}
]; */
ReactDOM.render(
  <React.StrictMode>
    {/* <Register texts={textos}/> */}
    {/* <Auth texts={textos}/> */}
    <RestorePass />

  </React.StrictMode>,
  document.getElementById('root')
);
