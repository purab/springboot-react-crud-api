import React, { useState } from 'react';

import Employee from './Employee';

const AllEmployees = ()=>{

    const [employees,setEmployees] =useState([
        {name: 'tst1',mobileNo:32333333,salary:122224},
        {name: 'tst2',mobileNo:234563333,salary:78754},
        {name: 'tst3',mobileNo:85763333,salary:78754}
    ])

    return (
        <div>
            <h1>All Employees</h1>
            <p>List of employees are as follows:</p>
            {
                employees.length>0 ? employees.map((item)=>
                    <Employee employee={item}/>
                ) : "No Employees."
            }
        </div>
    );
}

export default AllEmployees;