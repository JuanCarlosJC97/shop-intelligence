import React from 'react'
import './RecoverAccount.css'
import { FormControl, Image } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import MyModal from '../modal/MyModal';
import Logo from '../../images/logo.png'

const modalText = [{ title: "Tu contraseña se restableció", image: "CheckValid", modalP: "¡Exitosamente!" }];

export default function RecoverAccount() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="recover">
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
                <div className="form-user">
                    <div className="head-form">
                        <h1>Recupera tu cuenta</h1>
                    </div>
                    <hr className="line" />
                    <div className="form">
                        <FormControl id="formEmail" className="mb-3" type="text" variant="second" placeholder="Nombre de Usuario" disabled></FormControl>
                        <FormControl id="formEmail" className="mb-3" type="password" variant="second" placeholder="Nueva contraseña"></FormControl>
                        <FormControl id="formEmail" className="mb-3" type="password" variant="second" placeholder="Confirmar contraseña"></FormControl>
                    </div>
                    <div className="buttons">
                        <Button id="button-login" className="mb-3-2" variant="second">Cancelar</Button>
                        <Button id="button-login" className="mb-3" variant="second" onClick={() => { setModalShow(true) }}>Guardar</Button>
                    </div>
                </div>
                <div className="link">
                    <Button id="recoverPass" className="recoverPass" variant="links" size="lg" >Restablecer Contraseña</Button>
                </div>
            </div>


            <div className="footer">
            </div>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                contenido={modalText}
            />
        </div>
    )
}
