import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap';

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        
    }
    render() {
        console.log(this.props.list)
        return (
            <Col>
                <div>
                    <Card>
                        <CardImg top width="100%" src={this.props.list.image} alt="Card image" />
                        <CardBody>
                        <CardTitle>{this.props.list.name}</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div> 

            </Col>
        )
    }
}

export default Cards