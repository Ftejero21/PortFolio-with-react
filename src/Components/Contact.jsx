import React from 'react'
import Fade from 'react-reveal/Fade';
import email from '@emailjs/browser'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGgCircle} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {

  const [loading , setLoading] = useState(false);

  const enviar = (e) =>{
      e.preventDefault();
      email.sendForm('service_jwv181h','template_wm2m7ud',e.target,'cJ8Xih93JsqVGOTjd')
      .then(Response => {
        
        setLoading(true)
        alert("Mensaje enviado con exito")
        
      })

      
      .catch(error => alert('Error'))
      
    }

    


  return (
    <div className='container-main'>
      <Fade>
        <div className='contact-section'>
          <div className="titulo-contact">
            <h1>Contact Me</h1>
          </div>
          <div className='conteiner-contact'>
            
            <div className="image-contact">
              <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/contact-img.svg" alt="" />
            </div>
            
            
            <form onSubmit={enviar}>
              <div className="controls">
                <div className='Credentials'>
                  <input type="text"  required placeholder='Name...' name='nombre'/>
                  <input type="text"  placeholder='case..' name='case' />
                </div>
                <div className="email-input">
                  <input type="email"  required placeholder='Email...' name='Email' />
                </div>
                <div className="textarea">
                  <textarea name="textarea" required placeholder='Send me a Message...'></textarea>
                </div>
                <div className="button">
                  <input type="submit" value="Enviar" className={loading ? 'enviado' : ''}></input>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Contact