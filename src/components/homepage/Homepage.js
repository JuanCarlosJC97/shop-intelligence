import React from 'react';
import './Homepage.css';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Logo2 from '../../images/logo2.svg'


export default function Homepage() {
    return (
        <div className="home">
            <div className="header">
                <div className="nav">
                    <div className="logo">
                        <Image className="logo-image" src={Logo2}></Image>
                    </div>
                    <div className="menu">
                    <Button id="inicio" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Inicio</Button>
                    <Button id="menu" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Menú</Button>
                    <Button id="ofertas" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Ofertas</Button>
                    <Button id="promo" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Promociones</Button>
                    <Button id="nosotros" className="mb-3" type="button" variant="links" size="lg" bsPrefix="btn" >Nosotros</Button>
                    </div>
                    <div className="icons">

                    </div>
                </div>
            </div>
            <div className="body">
            </div>
            <div className="footer">
            </div>
            {/* <div className="elipses">
                <div class="Ellipse-4"></div>
                <div class="Ellipse-3"></div>
            </div> */}
        </div>
    )
}
