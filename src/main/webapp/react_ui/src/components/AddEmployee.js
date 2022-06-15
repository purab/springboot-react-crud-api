import React from 'react';
import {Form,FormGroup,Input,Button,Container} from 'reactstrap';

const AddEmployee=() => {
    return (
        <div>
        <h1>Add Employee</h1>
            <Form>
                <FormGroup>
                    <label for="name">Name</label>
                    <Input type="text" placeholder="enter here" name="name" id="name" />
                </FormGroup>
                <FormGroup>
                    <label for="mobileNo">mobileNo</label>
                    <Input type="text" placeholder="enter here" name="mobileNo" id="mobileNo" />
                </FormGroup>
                <FormGroup>
                    <label for="salary">salary</label>
                    <Input type="text" placeholder="enter here" name="salary" id="salary" />
                </FormGroup>
                <Container>
                    <Button color="success" type="submit" >Add Employee</Button>
                    <Button color="warning ml-2" type="reset" >Clear</Button>
                </Container>
            </Form>
        </div>
    );
}

export default AddEmployee;