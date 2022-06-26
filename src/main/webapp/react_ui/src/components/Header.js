import React from "react";
import {Card, CardBody} from "reactstrap";

function Header({name,title}) {
    return (
        <div>
            <Card className="my-1 bg-warning">
                <CardBody>
                <div className="header text-center">
                    <h1>title: {title}</h1>
                    <h1>welcome {name}</h1>
                    
                </div>        
                </CardBody>
            </Card>
            
        </div>
        
    )
}

export default Header;