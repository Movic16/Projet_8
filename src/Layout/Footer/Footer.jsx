import React from "react";

function Footer(props) 
{
    console.log("props", props);
    const children = props.children;

    return <footer>{children}</footer>
}

export default Footer;