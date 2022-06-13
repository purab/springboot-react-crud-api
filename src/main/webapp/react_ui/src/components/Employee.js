import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle,CardText, Button, Container} from 'reactstrap';

const Employee = ({employee}) => {
        return (
        <div>
            <Card className="text-center"  >
                <CardBody>
                <CardTitle tag="h5" >{employee.name}</CardTitle>                
                <CardText>
                    <p>Mobile No{employee.mobileNo}</p>
                    <p>salary{employee.salary}</p>
                </CardText>
                <Container className="text-center">
                    <Button color="danger ml-3" >Delete</Button>
                    <Button color="warning" className="ml-3" >Update</Button>
                </Container>
                
                </CardBody>
            </Card>
        </div>
        );
}

export default Employee;