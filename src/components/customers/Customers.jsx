import React from 'react';
import MyModal from '../modal/MyModal';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import clientesImg from '../../images/clientesImg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Customers.css';
//import {Button} from 'react-bootstrap';

const modalText = [{title: "Te registraste", image: "CheckValid", modalP: "¡Exitosamente!"}];


// const colProd = [{name: 'No. de Cliente', field: 'numero}, {name: 'Nombre', field: 'nombre'}, {name: 'Apellidos', field: 'apellidos'}, {name: 'Fecha de Nacimiento', field: 'fechnam'}, {name: 'Teléfono', field: 'telefono'}, {name: 'Correo electrónico', field: 'email'}];

// const data = [{ numero: 'SRM001', nombre: 'Sarai', apellidos: 'Resendiz Mendoza', fechnam: '20/07/1998', telefono: '56-18-45-53-13', email: 'Saraaresendiz@gmail.com' }];


function Customers() {
    const [modalShow, setModalShow] = React.useState(false);

    return(
            <div className="Mantener-Clientes">
                
                {/* SEPARACION COLORES */}
                <div className="Rectangle-3"></div>
                <div className="Rectangle-28"></div>

                {/* ARES */}
                <div className="Rectangle-1"></div>
                <span className="ARES">ARES</span>

                {/* SHOP */}
                <div className="Rectangle-29"></div>
                <span className="SHOP">SHOP</span>

                {/* CATALOGO Clientes */}
                <span className="Catlogo-de-Clientes">Catálogo de <span className="text-style-1">Clientes</span></span>

                {/* INICIO */}
                <span className="Inicio">Inicio</span>

                {/* SESION */}
                <div className="Rectangle-9"></div>
                <span className="Cerrar-Sesin">Cerrar Sesión</span>
                
                {/* Cliente NUEVO */}
                <div className="Rectangle-36"></div>
                <div className="Cliente-Nuevo">Nuevo Cliente ✔️</div>
                
                {/* TABLA */}
                <div className="row">
                    <div className="col">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No. de Cliente</th>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Fecha de Nacimiento</th>
                                    <th>Teléfono</th>
                                    <th>Correo electrónico</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SRM001</td>
                                    <td>Sarai</td>
                                    <td>Resendiz Mendoza</td>
                                    <td>20/07/1998</td>
                                    <td>56-18-45-53-13</td>
                                    <td>Saraaresendiz@gmail.com</td>
                                    <td>✏️</td>
                                    <td>❌</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* IMAGEN */}
                <div>
                    <Image className="Ellipse-7" src={clientesImg} bsPrefix />
                </div>
                <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                contenido={modalText}
                />
            </div>
    )
}

export default Customers