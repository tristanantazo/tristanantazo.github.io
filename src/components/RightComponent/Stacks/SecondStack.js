import React from "react";

import pic from './../../../assets/image/pic.png';
import js from './../../../assets/image/js.png';
import react from './../../../assets/image/react.png';
import laravel from './../../../assets/image/laravel.png';
import php from './../../../assets/image/php.svg';
import python from './../../../assets/image/python.png';
import vuejs from './../../../assets/image/vuejs.png';
import wp from './../../../assets/image/wp.png';

class SecondStack extends React.Component {
    constructor(props){
        super(props);

        this.ref = {
            aboutSkill: React.createRef(),
            section: React.createRef(),
        }
    }

    render(){
        return (
            <div className="sections second-stack" ref={this.ref.section}>
                <div className="abt-skills" ref={this.ref.aboutSkill}>
                    <div className="about">
                        {/* <h1 className="">ABOUT</h1> */}
                        <div className="d-flex">
                            <div className="img-wrapper columns">
                                <div className="hexa">
                                    <div className="hex1">
                                        <div className="hex2">
                                            <img src={pic} alt=""/>
                                        {/* <img src="http://farm3.staticflickr.com/2788/4392569951_8bcec3b3ed_z.jpg?zz=1" alt="" width="320" height="313" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div className="abt columns">
                                <h2>ABOUT ME</h2>
                                <p>A Junior Web Developer specializing in full-stack development. Experience two and 
                                    a half years in different web development, knowledge in different web programming 
                                    languages and frameworks. Driven and self-motivated, and therefore effective at 
                                    completing tasks with minimal supervision.</p>                                
                            </div>
                        </div>                        
                    </div>

                    <div className="skill">
                        <h2 className="skill-header">TECH STACK</h2>
                        <div className="skill-container">
                            <div className="skill-wrapper">
                                <img src={laravel} alt=""/>
                                <p>Laravel</p>
                            </div>
                            <div className="skill-wrapper">
                                <img src={vuejs} alt=""/>
                                <p>VueJs</p>
                            </div>
                            <div className="skill-wrapper">
                                <img src={php} alt=""/>
                                <p>Php</p>
                            </div>
                            <div className="skill-wrapper">
                                <img src={js} alt=""/>
                                <p>Javascript</p>
                            </div>
                            <div className="skill-wrapper">
                                <img src={react} alt=""/>
                                <p>ReactJs</p>
                            </div>
                            <div className="skill-wrapper">
                                <img src={python} alt=""/>
                                <p>Python</p>
                            </div>
                            <div className="skill-wrapper">
                                <img src={wp} alt=""/>
                                <p>WordPress</p>
                            </div>
                        </div>                       
                    </div>

                </div>
            </div>
        )
    }
}

export default SecondStack;