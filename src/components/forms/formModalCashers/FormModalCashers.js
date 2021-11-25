import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, FormControl, FormLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './FormModalCashers.css'

export default function FormModalCashers(props) {
    return (
        <Modal {...props} className="modal" aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <h1>Nuevo Cajero</h1>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <>
                    <FormLabel> Clave *</FormLabel>
                    <FormControl id="clave" className="mb-3" type="text"></FormControl>
                    <FormLabel> Fecha de Entrada *</FormLabel>
                    <FormControl id="clave" className="mb-3" type="text"></FormControl>
                    <FormLabel> Nombre *</FormLabel>
                    <FormControl id="clave" className="mb-3 "type="text" ></FormControl>
                    <FormLabel> Apellidos *</FormLabel>
                    <FormControl id="clave" className="mb-3" type="text"></FormControl>
                    <FormLabel> Edad *</FormLabel>
                    <FormControl id="clave" className="mb-3" type="text"></FormControl>
                    <FormLabel> Dirección *</FormLabel>
                    <FormControl id="clave" className="mb-3" type="text"></FormControl>
                    <FormLabel> Teléfono *</FormLabel>
                    <FormControl id="clave" className="mb-3" type="text"></FormControl>
                    <FormLabel> Correo Electrónico *</FormLabel>
                    <FormControl id="clave" className="mb-3" type="email"></FormControl>
                </>
            </Modal.Body>
            <Modal.Footer>
                <>
                    <Button variant="secondary" closeButton >
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
