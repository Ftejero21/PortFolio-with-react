import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { useState} from 'react'
import Main from '../Main';
import About from '../About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin, faRigthLong, faTelegram } from '@fortawesome/free-brands-svg-icons'
import PortFolio from '../PortFolio';
import Contact from '../Contact';

import Fade from 'react-reveal/Fade';

const RouterPrincipal = () => {
    

    

    

    
    return (
        
        
        <BrowserRouter>

                <nav>
                    <div className='logo'>
                        <h1>Fernando Tejero Developer</h1>
                    </div>
                    <div className='enlaces'>
                        <NavLink to='/inicio' className={({isActive}) => isActive ? "activado" : ""}>Home </NavLink>
                        <NavLink to='/skills' className={({isActive}) => isActive ? "activado" : ""}>Skills</NavLink>
                        <NavLink to='/Portfolio' className={({isActive}) => isActive ? "activado" : ""}>PortFolio</NavLink>
                        <a className='icons' href="https://www.linkedin.com/in/fernando-tejero-fierro-a56176216/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className='icons' href="https://www.instagram.com/fernandotejero00/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className='icons' href="https://github.com/Ftejero21?tab=repositories" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <NavLink to='/contact'><button>Contact Me</button></NavLink>
                        
                    </div>
                </nav>
                
                <div>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/inicio' element={<Main/>}/>
                        <Route path='/skills' element={<About/>}/>
                        <Route path='/portfolio' element={<PortFolio/>}/>
                        <Route path='/contact' element={<Contact/> }/>
                    </Routes>
                </div>



        </BrowserRouter>


        
    )
}

export default RouterPrincipal