import React from 'react';
import Pai from '../Componentes/Pai';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Finder.css';
function Finder() {
    return (
        <div className='Finder'>
            <Pai />
            <Link to="/rola">
                <button type="button" className="btn btn-primary btn-lg">Click At Me</button>
            </Link>
        </div>
    )
}

export default Finder;