import React from 'react'
import './RestorePass.css'
import { FormControl, FormLabel, Image, InputGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Logo from '../../images/logo.png'
import Mail from '../../images/mail.svg'

export default function RestorePass() {
    return (
        <div className="restore">
            <div className="nav">
                <div className="logo-head">
                    <Image className="logo" src={Logo} />
                </div>
                <div className="user">
                    <Form.Control id="email" className="mb-3" type="email" placeholder="Nombre de Usuario"></Form.Control>
                    <Form.Control id="pass" className="mb-3" type="password" placeholder="Contraseña"></Form.Control>
                </div>
                <div className="button-header">
                    <Button id="button-login" className="mb-3" variant="second">Iniciar Sesión</Button>
                </div>
            </div>

            <div className="body">
                <div className="form-email">
                    <div className="head-form">
                        <h1>Restablecer Contraseña</h1>
                    </div>
                    <hr className="line" />
                    <div className="form">
                        <FormControl id="formEmail" className="mb-3" type="email" variant="second" placeholder="Correo Electronico"></FormControl>
                        <FormControl id="formEmail" className="mb-3" type="email" variant="second" placeholder="Confirmar Correo Electronico"></FormControl>
                    </div>
                    <div className="buttons">
                        <Button id="button-login" className="mb-3-2" variant="second">Cancelar</Button>
                        <Button id="button-login" className="mb-3" variant="second">Enviar</Button>
                    </div>
                </div>
            </div>

            <div className="footer">
            </div>
        </div>
    )
}
