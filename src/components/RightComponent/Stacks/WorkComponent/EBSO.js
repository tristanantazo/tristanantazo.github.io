import React from "react";

export default class EBSO extends React.Component {
    // componentDidMount() {
    //     console.log('EBSO componentDidMount')
    //     var d_work = document.getElementsByClassName("detailed-work");
    //     d_work[0].classList.add('open-active')
    // }

    // componentWillUnmount(){
    //     var d_work = document.getElementsByClassName("detailed-work");
    //     d_work[0].classList.remove('open-active')
    // }

    render(){
        return (
            <div className="work">
                <h3>AFP Educational Benefit System Office</h3>
                <p className="date">OJT</p>
                <p className="work-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eum totam excepturi aperiam error 
                    voluptate fuga magnam suscipit fugit odio! Commodi, amet quisquam odio id reiciendis assumenda. 
                    Voluptates, nihil consequuntur.</p>
            </div>
        )
    }
}
