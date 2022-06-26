import React, { useState,useEffect } from 'react';

import Employee from './Employee';
import axios from "axios";
import base_url from './Constants';
import { ToastContainer, toast } from 'react-toastify';

const AllEmployees = ()=>{

    useEffect(()=>{
        document.title= "Employee management";
        //console.log(base_url);
        
    },[])

    const getAllEmployeesFromServer=()=>{
        axios.get(`${base_url}/employees`).then(
            (response)=>{
                console.log(response);
                toast.success("employees are loaded",{
                    position:'bottom-center'
                });
                setEmployees(response.data)                
            },
            (error)=>{
                //this is for error
                console.log(error);
                toast.error("server not reachable..")
            }
        )
    }

    useEffect(()=>{
        getAllEmployeesFromServer();
    },[])

    const [employees,setEmployees] =useState([])

    const removeEmployeeById=(id)=>{
        setEmployees(employees.filter((c)=> c.id !=id ))
    }

    return (
        <div>
            <h1>All Employees</h1>
            
            {
                employees.length>0 ? employees.map((item)=>
                    <Employee key={item.id} employee={item} removeEmployeeById={removeEmployeeById} />
                ) : "No Employees."
            }
        </div>
    );
}

export default AllEmployees;