import React, {Component} from 'react';
import '../App.css';
import {TweenMax,Power1,Elastic} from "gsap/TweenMax"

class Description extends Component {


    componentDidMount(){
        let describe = document.getElementById(this.props.name)
        TweenMax.to(describe, 0.5, {rotation:10, transformOrigin:"50% 50%", ease: Power1.easeOut});
        TweenMax.to(describe, 0.5, {delay: 0.5, rotation:-20, transformOrigin:"50% 50%", ease: Power1.easeOut});
        TweenMax.to(describe, 1, {delay: 1, rotation:0, transformOrigin:"50% 50%", ease:Elastic.easeOut});
    }
    
    render(){
        console.log(this.props.data)

        return (
            <div id={this.props.name}>
            <ul>
                <li>Price: ${this.props.data.price}</li>
                <li>Quantity: {this.props.data.quantity}</li>
                <li>{this.props.data.description}</li>
            </ul>
            </div>
    )
    }
}

export default Description;