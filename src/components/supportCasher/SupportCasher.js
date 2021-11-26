import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Logo from '../../images/logo.png'
import Casher from '../../images/casher.jpg'
import './SupportCasher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SupportCasher() {
    const MySwal = withReactContent(Swal)

    const FormModalCashers = (title) => {
        Swal.fire({
            title: title,
            html: `
                <input type="text" id="clave" class="swal2-input" placeholder="Clave de Cajero">
                <input type="text" id="dateAdmission" class="swal2-input" placeholder="Fecha de ingreso">
                <input type="text" id="name" class="swal2-input" placeholder="Nombre">
                <input type="text" id="lastName" class="swal2-input" placeholder="Apellidos">
                <input type="text" id="age" class="swal2-input" placeholder="Edad">
                <input type="text" id="direcction" class="swal2-input" placeholder="Derección">
                <input type="text" id="numberPhone" class="swal2-input" placeholder="Numero telefocnico">
                <input type="email" id="emailCasher" class="swal2-input" placeholder="correo electronico">
                `,
            confirmButtonText: 'Guardar',
            showCancelButton: true,
            focusConfirm: false,
            preConfirm: () => {
                const clave = Swal.getPopup().querySelector('#clave').value
                const dateAdmission = Swal.getPopup().querySelector('#dateAdmission').value
                const name = Swal.getPopup().querySelector('#name').value
                const lastName = Swal.getPopup().querySelector('#lastName').value
                const age = Swal.getPopup().querySelector('#age').value
                const direcction = Swal.getPopup().querySelector('#direcction').value
                const numberPhone = Swal.getPopup().querySelector('#numberPhone').value
                const emailCasher = Swal.getPopup().querySelector('#emailCasher').value
                if (!clave || !dateAdmission || !name || !lastName || !age || !direcction || !numberPhone || !emailCasher ) {
                    Swal.showValidationMessage(`por favor completa los campos`)
                }
                return { clave: clave, dateAdmission: dateAdmission, nam: name, lastName: lastName, age: age, direcction: direcction, numberPhone: numberPhone, emailCasher: emailCasher}
            }
        }).then((result) => {
            //mandar a llamar el fetch para enviar los datos al backend
        })
    }

    const MyAlert = () => {
        Swal.fire({
            title: '¿Desea Eliminar este registro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Tu registro ha sido eliminado.',
                    'success'
                )
            }
        })
    }
    return (
        <Container className="supportCasher">
            <Row>
                <Col md={4} lg={4}>
                    <Image className="logo" src={Logo}></Image>
                </Col >
                <Col className="title" sm={6} md={4} lg={4}>
                    <h1>Catálogo de Cajeros</h1>
                </Col>
                <Col className="col-button-close" sm={4} md={4} lg={4}>
                    <Button className="mb-3 button-inicio" variant="link">Inicio</Button>
                    <Button className="mb-3 button-close" variant="primary">Cerrar sesión</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col lg={11}>
                    <Button className="mb-3 add-casher" variant="light" onClick={() => {FormModalCashers("Nuevo Cajero")}}>Nuevo Cajero <FontAwesomeIcon className="icon-plus" icon={faPlus} /></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={9} sm={12} md={12} lg={12}>
                    <Table className="table-cashers" bordered size="sm" responsive>
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
                                <td><FontAwesomeIcon className="icon-trash" icon={faPencilAlt} onClick={() => { FormModalCashers("Modificar Cajero")}} /></td>
                                <td> <FontAwesomeIcon className="icon-trash" icon={faTrashAlt} onClick={() => { MyAlert() }} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-md">
                <Col lg={12}>
                    <Image className="img-casher" src={Casher} roundedCircle></Image>
                </Col>
            </Row>
        </Container >
    )
}
