
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Fade, Progress } from 'reactstrap';
import { faBootstrap, faCss3, faFacebook, faGit, faGithub, faGitlab, faHtml5, faJs, faNode, faPhp, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
const About = (args) => {
  const [loading, setLoading] = useState(true);


  const carga = () => {

    setTimeout(() => {
      setLoading(false)
    }, 1000)


  }

  useEffect(() => {
    carga();
  })

  if (loading) {
    return (
      <div className='container-main'>
        <div className='cargando-section'>
          <img src="https://i.gifer.com/GnY.gif" alt="" />


        </div>
      </div>
    )
  } else {
    return (
      <div className='skills-conteiner'>
        
        <div className='logo-skills'>
          <h1>Skills</h1>
        </div>
        <Zoom>
          <div className="conteiner-skills">
            
            <div className='skills-image'>
              <img src="/img/imagen programador.png.png" alt="" />
            </div>
            
            <div className='texto-skills'>
                <div className='caja-skills'>
                  <div className="titulo">
                    <h3>Frontend Skills</h3>
                  </div>
                  <Zoom delay="500">
                    <div className="info-skills">
                      <h5>Html<span><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></span></h5>
                      <h5>Css<span><FontAwesomeIcon icon={faCss3}></FontAwesomeIcon></span></h5>
                      <h5>JavasCript<span><FontAwesomeIcon icon={faJs}></FontAwesomeIcon></span></h5>
                      <h5>React<span><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></span></h5>
                      <h5>Bootstrap<span><FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon></span></h5>
                    </div>
                  </Zoom>
                </div>
                <div className='caja-skills'>
                  <div className="titulo">
                    <h3>Backend Skills</h3>
                  </div>
                  <Zoom delay="500">
                    <div className="info-skills">
                      <h5>Node.js<span><FontAwesomeIcon icon={faNode}/></span></h5>
                      <h5>Php<span><FontAwesomeIcon icon={faPhp}/></span></h5>
                      <h5>Express.js<span></span></h5>
                    </div>
                  </Zoom>
                </div>
                <div  className='caja-skills'>
                  <div className="titulo">
                    <h4>Development Tools</h4>
                  </div>
                  <Zoom delay="500">
                    <div className="info-skills">
                      <h5>Git<span><FontAwesomeIcon icon={faGithub}/></span></h5>
                      <h5>Visual Studio<span></span></h5>
                      <h5>IntelliJ<span></span></h5>
                      <h5>GitLab<span><FontAwesomeIcon icon={faGitlab}/></span></h5>
                    </div>
                  </Zoom>
                </div>
                <div  className='caja-skills'>
                  <div className="titulo">
                    <h4>Other Skills</h4>
                  </div>
                  <Zoom delay="500">
                    <div className="info-skills">
                      <h4>B2 English</h4>
                      <h4>Leadership</h4>
                      <h4>Empathy</h4>
                    </div>
                  </Zoom>
                </div>
            </div>
          </div>
        </Zoom>

      </div>







    )
  }




}

export default About