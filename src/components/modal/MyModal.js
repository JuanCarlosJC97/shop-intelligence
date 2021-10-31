import React from 'react'
import Modal  from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import checkCorrect from '../../images/check-mark.png'
import './Modal.css'


function MyModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered dialogClassName="modal">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="modalBody" bsPrefix>
                <h4>Inicio de Sesión</h4>
                <Image className="images" src={checkCorrect} />
                <p>Acceso Concedido</p>  
            </Modal.Body>
        </Modal >
    )
}

export default MyModal

