import React from 'react';
import MyModal from '../modal/MyModal';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import cajerosImg from '../../images/cajerosImg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cashiers.css';
//import {Button} from 'react-bootstrap';

const modalText = [{title: "Te registraste", image: "CheckValid", modalP: "¡Exitosamente!"}];


// const colProd = [{name: 'Clave', field: 'clave'}, {name: 'Fecha de Entrada', field: 'fechNam'}, {name: 'Nombre', field: 'nombre'}, {name: 'Apellidos', field: 'apellidos'}, {name: 'Edad', field: 'edad'}, {name: 'Dirección', field: 'direccion'}, {name: 'Teléfono', field: 'telefono'}, {name: 'Correo electrónico', field: 'email'}];

// const data = [{ clave: '00001', fechNam: '02/11/2021', Nombre: 'Sofia', apellidos: 'Pérez Castro', edad: '23', direccion: 'Calle condesa', telefono: '55-67-87-35-23', email: 'Sofiacastro@gmail.com'}];


function Cashiers() {
    const [modalShow, setModalShow] = React.useState(false);

    return(
            <div className="Mantener-Cajeros">
                
                {/* SEPARACION COLORES */}
                <div className="Rectangle-3"></div>
                <div className="Rectangle-28"></div>

                {/* ARES */}
                <div className="Rectangle-1"></div>
                <span className="ARES">ARES</span>

                {/* SHOP */}
                <div className="Rectangle-29"></div>
                <span className="SHOP">SHOP</span>

                {/* CATALOGO Cajeros */}
                <span className="Catlogo-de-Cajeros">Catálogo de<span className="text-style-1"> Cajeros</span></span>

                {/* INICIO */}
                <span className="Inicio">Inicio</span>

                {/* SESION */}
                <div className="Rectangle-9"></div>
                <span className="Cerrar-Sesin">Cerrar Sesión</span>
                
                {/* Cajero NUEVO */}
                <div className="Rectangle-36"></div>
                <div className="Cajero-Nuevo">Cajero Nuevo ✔️</div>
                
                {/* TABLA */}
                <div className="row">
                    <div className="col">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Clave</th>
                                    <th>Fecha de Entrada</th>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Edad</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Correo electrónico</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>00001</td>
                                    <td>02/11/2021</td>
                                    <td>Sofia</td>
                                    <td>Pérez Castro</td>
                                    <td>23</td>
                                    <td>Calle condesa</td>
                                    <td>55-67-87-35-23</td>
                                    <td>Sofiacastro@gmail.com</td>
                                    <td>✏️</td>
                                    <td>❌</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* IMAGEN */}
                <div>
                    <Image className="Ellipse-7" src={cajerosImg} bsPrefix />
                </div>
                <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                contenido={modalText}
                />
            </div>
    )
}

export default Cashiers