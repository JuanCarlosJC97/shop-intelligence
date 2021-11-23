import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, FormLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './FormModalCashers.css'

export default function FormModalCashers(props) {
    const [show, setShow] = useState(false);
    return (
        <Modal {...props} className="modal" aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <h1>Nuevo Cajero</h1>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <>
                    <FormLabel> Clave *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Fecha de Entrada *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Nombre *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Apellidos *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Edad *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Dirección *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Teléfono *</FormLabel>
                    <FormControl></FormControl>
                    <FormLabel> Correo Electrónico *</FormLabel>
                    <FormControl></FormControl>
                </>
            </Modal.Body>
            <Modal.Footer>
                <>
                    <Button variant="secondary" onClick={()=>{setShow(false)}}>
                        Cancelar
                    </Button>
                    <Button variant="primary">
                        Guardar
                    </Button>
                </>
            </Modal.Footer>
        </Modal >
    )
}
