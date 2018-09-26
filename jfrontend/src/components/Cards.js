import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col} from 'reactstrap';
import "../"

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        
    }
    render() {
        return (
            <Col md="4">
                    <Card>
                        <CardImg id="image" src={this.props.list.image_URL} alt="Card image" />
                        <CardBody>
                        <CardTitle>{this.props.list.name}</CardTitle>
                        <CardText></CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>

            </Col>
        )
    }
}

export default Cards