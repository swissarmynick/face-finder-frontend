import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='f3 white'>
                {'This app will detect faces in your pictures.'}
            </p>
            <p className='f3 white'>
                {'Give it a try!'}
            </p>
            <div className='center pa4 br3 w-70 shadow-5'>
                {/* <p className='f3 pa2 white dib'>{'URL:'}</p> */}
                <input 
                    className='f4 pa2 w-80 center' 
                    type='text'
                    onChange={onInputChange}
                />
                <br/>
                <button 
                    // className='dim f4 mt3 link ph3 pv2 ba br3 b--navy bw1 bg-white navy pointer'
                    className='mt3 br4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                    onClick={onSubmit}
                    > 
                    Detect
                </button>

                {/* <div className="">
                    <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in" 
                        onClick={() => onRouteChange('home')}
                        />
                </div> */}

            </div>
        </div>
    )
}

export default ImageLinkForm;