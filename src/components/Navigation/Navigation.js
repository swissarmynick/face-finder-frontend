import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        className='f3 white link dim black underline pa3 pointer'
                        // arrow function forces waiting for a click instead of the function running automatically
                        onClick={() => onRouteChange('signout')}
                        > Sign Out
                    </p>
                </nav>    
            )
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        className='f3 white link dim black underline pa3 pointer'
                        // arrow function forces waiting for a click instead of the function running automatically
                        onClick={() => onRouteChange('signin')}
                        > Sign In
                    </p>
                    <p 
                        className='f3 white link dim black underline pa3 pointer'
                        // arrow function forces waiting for a click instead of the function running automatically
                        onClick={() => onRouteChange('register')}
                        > Register
                    </p>
                </nav>
            );
        }
}

export default Navigation;