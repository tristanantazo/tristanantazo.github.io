import React from "react";
import './RightComponent.scss';

import FirstStack from './Stacks/FirstStack';
import SecondStack from './Stacks/SecondStack';
import ThirdStack from './Stacks/ThirdStack';
import FourthStack from './Stacks/FourthStack';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, fas } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, fas);
class RightContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Hi I'm <br/> Tristan Viel Antazo",
        }
        this.ref ={
            FirstStack: React.createRef(),
            SecondStack: React.createRef(),
            ThirdStack: React.createRef(),
            FourthStack: React.createRef(),
        }
        this.x = 0
        this.y = 0
    };
    handelClick = (e) => {
        console.log()
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = e => {
        var currentStack = null,
            sections = [
                this.ref.FirstStack.current.ref.section.current,
                this.ref.SecondStack.current.ref.section.current,
                this.ref.ThirdStack.current.ref.section.current,
                this.ref.FourthStack.current.ref.section.current,
            ],
            scrollY = window.scrollY || window.pageYOffset;

            this.firstStackAnimation(sections[0], scrollY);
            for (let index = 0; index < sections.length; index++) {
                var element = sections[index],
                    offsetTop = element.offsetTop,
                    offsetHeight = element.offsetHeight + offsetTop;
    
               if(scrollY >= offsetTop && scrollY < offsetHeight){
                    element.classList.add('active')
                }else{
                    element.classList.remove('active')
                }   
            }     
            this.activateSectionEffect(scrollY, currentStack);
    }
    firstStackAnimation = (element, scrollY) => {
        var container =  element.firstChild.firstChild,
            greet = container.children[0],
            h1 = container.children[1],
            status = container.children[2],
            move = 0,
            oo = 1;

            if(scrollY > (container.offsetTop - 100) && move > -30 && move > -70){
                move = (container.offsetTop - 100) - scrollY
                oo = ((200 - scrollY) / container.scrollHeight) + 0.5
            }
            container.style.opacity = oo
            this.setTransform(greet, `translateX(${move}px)`)
            this.setTransform(h1, `translateX(${Math.abs(move)}px)`)
            this.setTransform(status, `translateX(${move}px)`)
    }

    setTransform = (el, transform) => {
        el.style.transform = transform
        el.style.WebkitTransform = transform
      }

    activateSectionEffect = (scrollY, currentStack) => {
        if(scrollY > 250 && scrollY < 900){
            currentStack = this.ref.SecondStack.current.ref.aboutSkill
        }
        if(scrollY > 900 && scrollY < 1650){
            currentStack = this.ref.ThirdStack.current.ref.workStack
        }
        if(scrollY > 1650){
            currentStack = this.ref.FourthStack.current.ref.contactUs
        }
        if(currentStack != null){
            currentStack.current.classList.add('active')  
        }
    }

    render() {
        return (
            <div className="RightContainer" id="RightContainer">
                <button className="toggleNav" onClick={()=>{this.props.toggleLeft()}}><FontAwesomeIcon icon={faBars} /></button>
                <FirstStack ref={this.ref.FirstStack} />
                <SecondStack ref={this.ref.SecondStack}/>
                
                <ThirdStack ref={this.ref.ThirdStack}/>   
                <FourthStack ref={this.ref.FourthStack}/>   
            </div>
        );
    }
}
  
  export default RightContainer;
  