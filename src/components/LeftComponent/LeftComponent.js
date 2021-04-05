import React from 'react';
import './LeftComponent.scss';
import t from './../../assets/image/t.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

import Menu from './Menu/Menu';

library.add(fab, fas, far);

class LeftComponent extends React.Component{
    slideTo = (e) => {
        window.scrollTo(0, document.getElementsByClassName('first-stack')[0].offsetTop)
    }
    render() {
        console.log('left component render')
        return (
            <div className="LeftNav">
                <div className="ImageLogo" onClick={()=>{this.slideTo()}}>
                    <img src={t} className="App-logo" alt="logo" />
                </div>
                <Menu/>
                <div className="soc-media">
                    <a href="https://www.facebook.com/tristan.antazo"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="/#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    <a href="https://www.linkedin.com/in/tristan-viel-antazo-792884186/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                    <a href="https://github.com/tristanantazo"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                </div>
                <div className="copyrights">2021</div>
            </div>
        );       
    } 
}
  
  export default LeftComponent;