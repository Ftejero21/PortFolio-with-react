import React from 'react'



import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link,NavLink } from 'react-router-dom';
import Contact from './Contact';
const Main = () => {

    


  return (
    <Fade>
      <div className='container-main'>
       <section className='info-section'>
          <div>
           <Zoom duration ="1500">
             <div className='main-texto'>
               <h3>Welcome to my PortFolio</h3>
               <h1>Hi! I'm Fernando Tejero <span>FullStack <br/> Developer</span></h1>
               <p> I started to learn programming 1 year ago i started <br /> with html css and javascript and i'm learning <br/> react.js, node.js, next.js and others frameworks</p>
               
                <div className='btns-main'>
                  <NavLink to='/contact'><button>Contact Me</button></NavLink>
                  <button><a href='/Fernando2.0.pdf' download >Download My CV</a></button>
                  
                </div>
               
             </div>
           </Zoom>
          </div>
          <Zoom duration ="1500">
            <div className='imagen-info-section'>
              
                <img src="/img/astronauta.svg" />
              
            </div>
          </Zoom>
        </section>

      </div>
      
    </Fade>
   


  )
}

export default Main