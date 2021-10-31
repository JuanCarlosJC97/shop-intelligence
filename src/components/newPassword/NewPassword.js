import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import logo from '../../images/logo.png'
import MyModal from '../modal/MyModal';
import '../Auth.css'

export default function NewPassword(props) {
    const title = useState(props.title);
    const [modalShow, setModalShow] = React.useState(true);
    return (
        <div className="auth">
            <div className="body">
                <Container className="Container" bsPrefix>
                    <Image className="logo" src={logo} bsPrefix />
                    <label className="title">{title}</label>
                    <Row className="user" bsPrefix>
                        <>
                            <FloatingLabel controlId="floatingInput" label="Ingresar correo" className="mb-3" >
                                <Form.Control type="email" />
                            </FloatingLabel>
                            {/* <FloatingLabel controlId="floatingPassword" label="Verificar contraseña" className="mb-3" >
                                <Form.Control type="text" />
                            </FloatingLabel> */}
                        </>
                    </Row>
                    <Row className="send-info">
                        <Button variant="secondary" className="mb-3">
                            Enviar
                        </Button>
                        <Button className="passReset" variant="link">Iniciar sesión</Button>
                    </Row>
                </Container>
            </div>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}
