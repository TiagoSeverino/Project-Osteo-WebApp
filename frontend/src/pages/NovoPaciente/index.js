import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSettings, FiPower } from 'react-icons/fi';

import './styles.css';

export default function NovoPaciente () {
    return(
        <div className="novoPaciente-container">
            <div className="content">
                <section>
                    <h1>Adicionar um novo paciente</h1>
                </section>

                <form>
                    <input placeholder="Nome" />
                    <input placeholder="E-mail" />
                    <input placeholder="Género" />
                    <input placeholder="Nacionalidade" />
                    <input placeholder="Localidade" />
                    <input placeholder="Data de nascimento" />
                    <input placeholder="Altura" />
                    <input placeholder="Contacto" />
                    <Link type="submit" to="/homepage">ADICIONAR</Link>
                </form>
            </div>
        </div>
    );
}