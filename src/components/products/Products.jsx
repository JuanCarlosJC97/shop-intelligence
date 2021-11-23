import React from 'react';
import MyModal from '../modal/MyModal';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import productosImg from '../../images/productosImg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';
//import {Button} from 'react-bootstrap';

const modalText = [{title: "Te registraste", image: "CheckValid", modalP: "¡Exitosamente!"}];


// const colProd = [{name: 'Código de Barras', field: 'cod'}, {name: 'Nombre', field: 'nombre'}, {name: 'Marca', field: 'marca'}, {name: 'Categoría', field: 'cat'}, {name: 'Estatus', field: 'estatus'}, {name: 'Unidades', field: 'unidades'}, {name: 'IVA%', field: 'iva'}, {name: 'IEPS', field: 'ieps'}, {name: 'Precio $', field: 'precio'}];

// const data = [{ cod: 'A001', nombre: 'Rufles', marca: 'Sabritas', cat: 'Botana', estatus: 'Disponible', unidades: '37', iva: '5%', ieps: '$27.89', precio: '$15.03' }];


function Products() {
    const [modalShow, setModalShow] = React.useState(false);

    return(
            <div className="Mantener-Productos">
                
                {/* SEPARACION COLORES */}
                <div className="Rectangle-3"></div>
                <div className="Rectangle-28"></div>

                {/* ARES */}
                <div className="Rectangle-1"></div>
                <span className="ARES">ARES</span>

                {/* SHOP */}
                <div className="Rectangle-29"></div>
                <span className="SHOP">SHOP</span>

                {/* CATALOGO PRODUCTOS */}
                <span className="Catlogo-de-Productos">Catálogo de <span className="text-style-1">Productos</span></span>

                {/* INICIO */}
                <span className="Inicio">Inicio</span>

                {/* SESION */}
                <div className="Rectangle-9"></div>
                <span className="Cerrar-Sesin">Cerrar Sesión</span>
                
                {/* PRODUCTO NUEVO */}
                <div className="Rectangle-36"></div>
                <div className="Producto-Nuevo">Producto Nuevo ✔️</div>
                
                {/* TABLA */}
                <div className="row">
                    <div className="col">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Código de Barras</th>
                                    <th>Nombre</th>
                                    <th>Marca</th>
                                    <th>Categoría</th>
                                    <th>Estatus</th>
                                    <th>Unidades</th>
                                    <th>IVA%'</th>
                                    <th>IEPS</th>
                                    <th>Precio $</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>234-5R5-345S</td>
                                    <td>Rufles</td>
                                    <td>Sabritas</td>
                                    <td>Botana</td>
                                    <td>Disponible</td>
                                    <td>37</td>
                                    <td>5%</td>
                                    <td>$27.89</td>
                                    <td>15</td>
                                    <td>✏️</td>
                                    <td>❌</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* IMAGEN */}
                <div>
                    <Image className="Ellipse-7" src={productosImg} bsPrefix />
                </div>
                <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                contenido={modalText}
                />
            </div>
    )
}

export default Products