import React from 'react';
import './LeftComponent.scss';
import t from './../../assets/image/tristan-logo-black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

import Menu from './Menu/Menu';

library.add(fab, fas, far);

class LeftComponent extends React.Component{
    constructor(props){
        super(props);
        this.ref = {
            leftNav: React.createRef()
        }
    }
    slideTo = (e) => {
        window.scrollTo(0, document.getElementsByClassName('first-stack')[0].offsetTop)
    }
    slideLeftNav() {
        if(this.ref.leftNav.current.classList.contains('open-active')){
            this.ref.leftNav.current.classList.remove('open-active');
            this.ref.leftNav.current.classList.add('close-active');
        }else{
            this.ref.leftNav.current.classList.remove('close-active');
            this.ref.leftNav.current.classList.add('open-active');
        }
    }
    componentDidUpdate() {
        this.slideLeftNav();
    }
    render() {
        return (
            <div className="LeftNav" ref={this.ref.leftNav}>
                <button className="slideToggle" onClick={()=>{this.props.toggleLeft()}}>CLOSE MENU</button>
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