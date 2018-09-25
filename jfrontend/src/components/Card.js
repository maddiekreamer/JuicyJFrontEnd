import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        console.log(props)
        return (
            <div>
                <header>
                    <img src={this.props.list.img} alt="product" />
                    <h2>{this.props.list.name}</h2>
                </header>
            </div>
        )
    }
}

export default Card