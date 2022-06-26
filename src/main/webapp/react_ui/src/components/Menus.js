import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
    return (
        <div>
            <ListGroup>
                <Link className='list-group-item list-group-item-action' to="/home" tag="a">Home</Link>
                <Link className='list-group-item list-group-item-action' to="/add-employee" tag="a">Add Employee</Link>
                <Link className='list-group-item list-group-item-action' to="/view-employees" tag="a">View Employee</Link>
                <Link className='list-group-item list-group-item-action' to="/aboutus" tag="a">About Us</Link>
                <Link className='list-group-item list-group-item-action' to="/contact" tag="a">Contact</Link>
                
            </ListGroup>
        </div>
    )
}

export default Menus;