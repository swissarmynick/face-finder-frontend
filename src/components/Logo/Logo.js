import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
// import heart from './heart.png'
import face from './face.png'

const Logo = () => {
    return (
        <div className='ma4 mt0 flex justify-center'>
            <Tilt className="Tilt br2 shadow-2 flex items-center justify-center" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                        {/* <img src={lightbulb} alt='logo'/> */}
                        {/* <img src={light} alt='logo'/> */}
                        {/* <img src={heart} alt='logo'/> */}
                        <p className='f4 pa1 ma0 white navy'>Face Finder</p>
                        <img src={face} alt='logo'/>
                        {/* <p className='f4 pa1 white'>Looney Solutions</p> */}
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;