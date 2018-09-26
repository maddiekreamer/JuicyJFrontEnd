import React, { Component } from 'react';
import {Button} from 'reactstrap';
import "../"

const Categories = (props) => {

    return(
        <Button onClick={() => props.selectCategory(props.category.id)}>
            {props.category.type}
        </Button>
    )
}









export default Categories