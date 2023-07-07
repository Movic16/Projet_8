import React from "react";
import '../Main/main.css';

function Main(props) 
{
    console.log("props", props);
    const children = props.children;

    return <main className="P-Main">{children}</main>
}

export default Main;