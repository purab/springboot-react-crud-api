import React from "react";

function Header({name,title}) {
    return (
        <div className="header" style={{background:"red"}}>
        <h1>title: {title}</h1>
        <h1>welcome {name}</h1>
        <p>this is header component</p>
        </div>
    )
}

export default Header;