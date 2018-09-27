import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap';
import Description from "./Description.js"

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            hideSkill: false
        }

    }

    handleChange = (event) => {
        this.setState({hideSkill: !this.state.hideSkill})
    }

    render() {
        return (

            <Col md="6">
                   <div className="card mb-4 box-shadow" id="Card" >
                   <div id="Card-image">
                        <img className="card-img-top" src={this.props.list.image_URL} alt="Card image" />
                    </div>
                        <div className="card-body">
                            <p className="card-text">{this.props.list.name}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="text-muted">{this.state.hideSkill ? <Description data={this.props.list} name={this.props.list.name}/> : null}</h6>
                            </div>
                        </div>
                
                        <button type="button" className="btn btn-warning" id="button-size" onClick={this.handleChange}>View Details</button>
                    </div>
            </Col>
        )
    }
}


export default Cards