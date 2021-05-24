import React from "react";

import FPZ from './WorkComponent/FPZ';
import EBSO from './WorkComponent/EBSO';

export default class ThirdStack extends React.Component {
    constructor () {
        super();
        this.state = {
            currentWork: 'FPZ',
        }
        this.ref = {
            movingLine: React.createRef(),
            detailedWork: React.createRef(),
            workStack: React.createRef(),
            section: React.createRef(),
        }
        this.workBtn = [
            {
                label: "FPZ",
                value: "FPZ"
            },
            {
                label: "EBSO",
                value: "EBSO"
            },
        ]
    };

    RenderWork = () => {
        if(this.state.currentWork === 'FPZ'){
            return <FPZ/>;
        }else if(this.state.currentWork === 'mobile') {
            return (
                // react fragments shortcuts <React.Fragments> <>
                <>  
                    <FPZ/>
                    <EBSO/>
                </>
            );
        }else{
            return <EBSO/>;
        }
    };

    handelClick = (event, value, index) => {
        // currying function
        this.activateEffects(event.target, index);
        this.setState((prevstate)=> (
            {currentWork: prevstate === value ? prevstate:value}
        )); 
    }

    activateEffects = (e_target, index) => {
        this.ref.detailedWork.current.classList.remove('open-active')  

        var c_y = index * e_target.scrollHeight;
        this.ref.movingLine.current.style.transform = 'translateY('+c_y+'px)';

        this.ref.detailedWork.current.classList.add('open-active')       
    }

    reportWindowSize = e => {
        if(window.innerWidth === 768){
            this.setState({
                currentWork: 'mobile'
            })
        }else{
            this.setState({
                currentWork: 'FPZ'
            })
        }
    }

    componentDidMount() {
        this.ref.detailedWork.current.classList.add('open-active')
        window.addEventListener('resize', this.reportWindowSize);
    }

    render(){
        return (
            <div className="sections third-stack" ref={this.ref.section}>
                <div className="work-exp" ref={this.ref.workStack}>
                    <h1>Where I’ve Worked</h1>
                    <div className="work-container">
                        <div className="list-option" id="list-opt">
                            {
                                this.workBtn.map((item, index)=>{
                                    return <button 
                                        key={index}
                                        className={`btn ${this.state.currentWork === item.value ? 'active':''}`} 
                                        onClick={(e) => {this.handelClick(e, item.value, index)}}>
                                            {item.label}
                                    </button>
                                })
                            }
                            <div className="moving-line" ref={this.ref.movingLine}></div>
                        </div>
                        <div className="detailed-work" id="detailed-work" ref={this.ref.detailedWork}>
                            {this.RenderWork()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
