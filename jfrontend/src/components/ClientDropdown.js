import React from 'react';
import {Button} from 'reactstrap';
import "../"

const ClientDropdown = (props) => {

    return(
        <div>
            <h5>Select Item to Update or Delete</h5>
            <form id="itemsForm">
                <select onChange={props.change}>
                    <option defaultValue value="select">Select</option>
                    {props.createSelectItems()}
                </select>  
            
            </form>
        </div>
    )
}









export default ClientDropdown