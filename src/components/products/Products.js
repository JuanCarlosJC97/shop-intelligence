import React from 'react';
import MyModal from '../modal/MyModal';
import './Products.css';
//import {Button} from 'react-bootstrap';
//import { Image } from 'react-bootstrap';
//import Logo2 from '../../images/logo2.svg'

const modalText = [{title: "Te registraste", image: "CheckValid", modalP: "¡Exitosamente!"}];

function Products(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className="Mantener-Productos">
            {/* <div class="Rectangle-1"></div>
            <span class="ARES">ARES</span>
            <span class="Inicio">Inicio</span>
            <div class="Rectangle-9"></div>
            <span class="Cerrar-Sesin">Cerrar Sesión</span>
            <span class="Catlogo-de-Productos">Catálogo de <span class="text-style-1">Productos</span></span>
            <div class="Rectangle-29"></div>
            <span class="SHOP">SHOP</span> */}

            <div class="Rectangle-3">
                <div class="Rectangle-28"></div>
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