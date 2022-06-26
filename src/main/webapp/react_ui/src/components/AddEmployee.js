import React, { useState } from 'react';
import {Form,FormGroup,Input,Button,Container} from 'reactstrap';
import axios from "axios";
import base_url from './Constants';
import { ToastContainer, toast } from 'react-toastify';

const AddEmployee=() => {

    const [employee,setEmployee] = useState({})

    //form handler
    const handleForm=(e)=> {
        console.log(employee);
        //create random employee id..
       // setEmployee({...employee, id:Math.floor(Math.random() * 10000)});
        //post data to server
        postDataToServer(employee);
        e.preventDefault();
    }

    //post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/addEmployee`, data).then(
            (response)=>{
                console.log(response);
                toast.success("employee added sucessfuly",{
                    position:'bottom-center'
                });                             
            },
            (error)=>{
                //this is for error
                console.log(error);
                toast.error("server not reachable..")
            }
        )
    }

    

    return (
        <div>
        <h1>Add Employee</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <Input type="text" placeholder="enter here" name="name" id="name" onChange={(e)=>{
                        setEmployee({...employee, name: e.target.value})
                    }} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="mobileNo">mobileNo</label>
                    <Input type="text" placeholder="enter here" name="mobileNo" id="mobileNo" onChange={(e)=>{
                        setEmployee({...employee, mobileNo: e.target.value})
                    }} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="salary">salary</label>
                    <Input type="text" placeholder="enter here" name="salary" id="salary" onChange={(e)=>{
                        setEmployee({...employee, salary: e.target.value})
                    }} />
                </FormGroup>
                <Container>
                    <Button color="success" type="submit" >Add Employee</Button>
                    <Button color="warning ml-2" type="reset" onClick={()=>{
                        setEmployee({})
                    }} >Clear</Button>
                </Container>
            </Form>
        </div>
    );
}

export default AddEmployee;