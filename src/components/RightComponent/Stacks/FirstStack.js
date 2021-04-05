import React from "react";


class FirstStack extends React.Component {
    constructor(props) {
        super(props)
        this.ref = {
            section: React.createRef()
        }
    }
    render(){
        return (
            <div className="sections active first-stack" ref={this.ref.section}>
                <div className="greet-zone">
                    <div className="text-box">
                        <p className="greetings">Hi, my name is</p>
                        <h1>
                            <span>T</span>
                            <span>r</span>
                            <span>i</span>
                            <span>s</span>
                            <span>t</span>
                            <span>a</span>
                            <span>n</span>
                            &nbsp;
                            <span>V</span>
                            <span>i</span>
                            <span>e</span>
                            <span>l</span>
                            &nbsp;
                            <span>A</span>
                            <span>n</span>
                            <span>t</span>
                            <span>a</span>
                            <span>z</span>
                            <span>o</span>
                        </h1>
                        <p className="status-title">Front end / Back end - Web Developer</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstStack;