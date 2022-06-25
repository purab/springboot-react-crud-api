import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem action  href="#" tag="a">Home</ListGroupItem>
                <ListGroupItem action  href="#" tag="a">Add Employee</ListGroupItem>
                <ListGroupItem action  href="#" tag="a">View Employee</ListGroupItem>
                <ListGroupItem action  href="#" tag="a">About Us</ListGroupItem>
                <ListGroupItem action  href="#" tag="a">Contact</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Menus;