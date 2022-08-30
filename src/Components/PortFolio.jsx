import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { faLinkedin,faBootstrap, faCss3, faFacebook, faGit, faGithub, faGitlab, faHtml5, faJs, faNode, faPhp, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';
const PortFolio = () => {
  const [loading, setLoading] = useState(true);

  const carga = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)


  }

  useEffect(() => {
    carga();
  })

  if (loading) {
    return (
      <div className='container-main'>
        <div className='cargando-section'>
          <img src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="conteiner-main">
        <div className="portfolio-container">
          <div className="titulo-portfolio">
            <h1>Portfolio</h1>

          </div>
          <div className='projects'>
            <Fade>
              <div className="caja-projects">
                <img src="https://c8.alamy.com/compes/ghn04f/pokeball-colgando-en-el-aire-sobre-un-fondo-azul-ghn04f.jpg" alt="" />
                <div className='titulo-project'>
                  <h1>PokeDex</h1>
                  <p>This Pokedex show the diferents pokemons since generation 2015</p>
                  <div className='boton-project'>
                    <button><a href="#" target="blank">See demo</a></button>
                    <button><a href="https://github.com/Ftejero21/peliculas" target="blank">Mora information</a></button>
                  </div>
                  <div className="tecnologias-projects">
              
                    <h3>
                      <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                    </h3>
              
                    <h3>
                      <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                    </h3>
                    <h3>
                      <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                    </h3>
                    <h3>
                      <FontAwesomeIcon icon={faBootstrap} />
                    </h3>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade delay="500">
              <div className="caja-projects">
                <img src="/img/foto portfolio.PNG" alt="" />
                <div className='titulo-project'>
                  <h1>PortFolio</h1>
                  <p>This PortFolio i want show you all my knowledge about programming and all my projects   </p>
                  <div className='boton-project'>
                  
                    <button><a href="#" target="blank">See demo</a></button>
                    <button><a href="#" target="blank">Mora information</a></button>
                  
                  </div>
                  <div className="tecnologias-projects">
              
                    <h3>
                      <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                    </h3>
              
                    <h3>
                      <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                    </h3>
                    <h3>
                      <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                    </h3>
                    <h3>
                      <FontAwesomeIcon icon={faBootstrap} />
                    </h3>
                  </div>
                </div>
                
              </div>
            </Fade>
            <Fade delay="1000">
              <div className="caja-projects">
                <img src="https://i.pinimg.com/originals/77/b7/b7/77b7b752c047c55ac10ea10a393adfc3.jpg" alt="" />
                <div className='titulo-project'>
                  <h1>Yours Films</h1>
                  <div className='boton-project'>
                  
                    <button><a href="#" target="blank">See demo</a></button>
                    <button><a href="#" target="blank">Mora information</a></button>
                  
                  </div>
                </div>
              </div>
            </Fade>
            <Fade delay="1500">
              <div className="caja-projects">
                <img src="https://fondosmil.com/fondo/4038.jpg" alt="" />
                <div className='titulo-project'>
                  <h1>Gym</h1>
                  <div className='boton-project'>
                  
                    <button><a href="#" target="blank">See demo</a></button>
                    <button><a href="#" target="blank">Mora information</a></button>
                  
                  </div>
                </div>
              </div>
            </Fade>

          </div>
        </div>
      </div>
    )
  }
}

export default PortFolio