import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faFacebook, faGit, faHtml5, faJs, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';
const Loader = () => {
    return (
        <>

            <div className="intro">
                <div className="container">
                    <div className="imagen">
                        <Fade duration="1000" delay="1000">
                            <img src="/img/Fernando Tejero _free-file.png" alt="" />
                        </Fade>
                    </div>

                    <Fade delay="2000" duration="1000">
                        <div className="tecno">
                            
                                <h1>
                                    <FontAwesomeIcon icon={faHtml5} />
                                </h1>
                            
                            
                                <h1>
                                    <FontAwesomeIcon icon={faCss3} />
                                </h1>
                            
                            
                                <h1>
                                    <FontAwesomeIcon icon={faSass} />
                                </h1>
                            
                                <h1>
                                    <FontAwesomeIcon icon={faJs} />
                                </h1>
                            
                                <h1>
                                    <FontAwesomeIcon icon={faReact} />
                                </h1>
                           
                                <h1>
                                    <FontAwesomeIcon icon={faNode} />
                                </h1>
                            
                                <h1>
                                    <FontAwesomeIcon icon={faGit} />
                                </h1>
                            
                                <h1>
                                    <FontAwesomeIcon icon={faBootstrap} />
                                </h1>
                            
                        </div>
                    </Fade>

                </div>
            </div>





        </>

    )

}


export default Loader