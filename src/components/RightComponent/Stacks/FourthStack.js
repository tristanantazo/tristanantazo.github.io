import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas, far);


export default class FourthStack extends React.Component {
    constructor (props) {
        super(props)
        this.ref = {
            contactUs: React.createRef(),
            section: React.createRef(),
        }
    }
    render (){
        return (
            <div className="sections fourth-stack" ref={this.ref.section}>
                <div className="contact-us" ref={this.ref.contactUs}>
                    <div className="left-side">
                        <h1>GET IN TOUCH</h1>
                        <div className="frm">
                            <form>
                                <label htmlFor="email">Email :</label>
                                <input type="text" name="email"/>
                                <label htmlFor="name">Name :</label>
                                <input type="text" name="name"/>
                                <label htmlFor="message">Your message to me :</label>
                                <textarea name="message" id="msg-id" cols="30" rows="10"></textarea>
                            </form>
                            <button>SEND</button>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="sc">
                            <a href="https://www.facebook.com/tristan.antazo">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} /> 
                                <span>Like me on Facebook</span>
                            </a>
                            <br/>
                            <a href="/#">
                                <FontAwesomeIcon icon={['fab', 'twitter']} /> 
                                <span>Follow me on Twitter</span>
                            </a>
                            <br/>
                            <a href="https://www.linkedin.com/in/tristan-viel-antazo-792884186/">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} /> 
                                <span>Connect on LinkedIn</span>
                            </a>
                            <br/>
                            <a href="https://github.com/tristanantazo">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                                <span>Connect on Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}