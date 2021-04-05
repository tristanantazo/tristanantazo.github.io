import React from 'react';

import {MenuItems} from './MenuItems';

class Menu extends React.Component{
    slideTo = (param) => {
        console.log(param)
        switch (param) {
            case 0:
                window.scrollTo(0, document.getElementsByClassName('first-stack')[0].offsetTop)
                break;
            case 1:
                window.scrollTo(0, document.getElementsByClassName('second-stack')[0].offsetTop)
                break;
            case 2:
                window.scrollTo(0, document.getElementsByClassName('third-stack')[0].offsetTop)
                break;
            case 3:
                window.scrollTo(0, document.getElementsByClassName('fourth-stack')[0].offsetTop)
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <nav>
                <ul className="list-unstyled components">
                    {
                        MenuItems.map((item, index) => {
                            return <li onClick={() => {this.slideTo(index+1)}} key={index} className={item.cName}>{item.label}</li>
                        })
                    }
                </ul>
            </nav>
        );       
    } 
}
  
  export default Menu;