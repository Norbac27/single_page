import React, { Component, useRef} from 'react';
import './index.js'
import logo from '../img/logo.png';
import imgHover from '../img/Cover/hero-img.png';
import estilos from './moduloInicio.module.css';
import facebook from '../img/social_media/facebook.png';
import insta from '../img/social_media/instagram.png';
import twi from '../img/social_media/twitter.png';
import youtu from '../img/social_media/youtube.png';
import ModuloEmpleado from '../moduloEmpleados/index.js';


class Inicio extends Component {
    

    constructor(props) {
        super(props);
        this.refMenuEmpresa = React.createRef();
        this.refMenuBtn = React.createRef();
    }
    
    desplegar = () => {

        if (this.refMenuBtn.current.textContent === "Empezar") {
          this.refMenuBtn.current.textContent = "cerrar";
          this.refMenuEmpresa.current.style.display = "block";
        } else {
          this.refMenuBtn.current.textContent = "Empezar";
          this.refMenuEmpresa.current.style.display = "none";
        }
      };

    
    state = {   }
    

    render() { 
        return (  
            <div>
                <header>
                    <div class={estilos.container__header}>
                        <div class={estilos.menu}>
                            <div class={estilos.logo}>
                                <a href="#">
                                    <img src={logo} alt=""/>
                                </a>
                            </div>

                            <nav>
                                <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Obras</a></li>
                                <li><a href="#">Contactos</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div class={estilos.socialMedia}>
                            <a href="#">
                                <img src={facebook} alt=""/>
                            </a>
                            <a href="#">
                                <img src={insta} alt=""/>
                            </a>
                            <a href="#">
                                <img src={twi} alt=""/>
                            </a>
                            <a href="#">
                                <img src={youtu} alt=""/>
                            </a>
                        </div>
                    </div>
                </header>
                <main>
                    <div class={estilos.container__cover}>
                        <div class={estilos.cover}>
                            <section class={estilos.text__cover}>
                                <h1>Gestionar tu nomina de empleados jamas fue tan sencillo.</h1>
                                <p>si lo que necesitas es gestionar la nomina de tu empresa, NOMINATE es la mejor alternativa. Hazlo posible con NOMINATE</p>
                                <button id="menu-btn" ref={this.refMenuBtn} onClick={this.desplegar}>
                                    Empezar
                                </button>
                            </section>
                            <section class={estilos.image__cover}>
                                <img src={imgHover} alt=""/>
                            </section>
                        </div>
                    </div>
                    <div ref={this.refMenuEmpresa}>
                        <ModuloEmpleado></ModuloEmpleado>
                    </div>

                </main>
            </div>
        );
    }
}
 
export default Inicio;
