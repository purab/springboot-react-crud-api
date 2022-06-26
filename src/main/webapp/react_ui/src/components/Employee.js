import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button, Container} from 'reactstrap';
import axios from "axios";
import base_url from './Constants';
import { ToastContainer, toast } from 'react-toastify';

const Employee = ({employee, removeEmployeeById}) => {
    
    const deleteEmployee=(employee_id,e) => {
        console.log(employee_id);
        axios.delete(`${base_url}/deleteEmployee/${employee_id}`).then(
            (response)=>{
                console.log(response);
                toast.success("employee is deleted...",{
                    position:'bottom-center'
                });
                //remove element-
                removeEmployeeById(employee_id);
                              
            },
            (error)=>{
                //this is for error
                console.log(error);
                toast.error("server not reachable..")
            }
        );
        //e.preventDefault();
    }


        return (
        <div>
            <Card className="text-center"  >
                <CardBody>
                <CardTitle tag="h5" >{employee.name}</CardTitle>                
                <CardText>
                    
                        Mobile No{employee.mobileNo}, 
                        salary{employee.salary}
                    
                    
                </CardText>
                <Container className="text-center">
                    <Button onClick={()=>{
                        deleteEmployee(employee.id);
                    }} color="danger ml-3" >Delete</Button>
                    <Button color="warning" className="ml-3" >Update</Button>
                </Container>
                
                </CardBody>
            </Card>
        </div>
        );
}

export default Employee;