import React from 'react';

const SignIn = ({ onRouteChange }) => {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                {/* Changed form tag to div to elimintate console error for form submission. Gives full JSON control later. */}
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                {/* must close input tags pasted from tachyons */}
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" /> 
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer">
                                <input type="checkbox" /> Remember me
                            </label> */}
                    </fieldset>
                    <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent dim pointer f6 dib" 
                            type="submit" 
                            value="Sign in" 
                            onClick={() => onRouteChange('home')}
                            />
                    </div>
                    <div className="lh-copy mt3">
                        {/* changed from anchor tag to p tag to perform route change */}
                        <p 
                            className="f6 link dim black db pointer"
                            onClick={() => onRouteChange('register')}
                            >Register
                        </p>
                        {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                    </div>
                </div>
            </main>
        </article>
    )
}

export default SignIn;