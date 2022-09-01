import "./AboutMe.css";
import {useState} from "react";

const AboutMe = () => {
    const [name, setName] = useState("");
    
    const showName = () => {
        setName("Jorge");
    };
    
    return(
        <div className="about">
            <h1>About Me</h1>
            <h3>Hi, I'm a young student in Computer Systems, currently learning through the Full Stack Course.</h3>
            <p>Do you wish to know my name?</p>
            <h4>{name}</h4>
            <button onClick={showName}>Read More</button>
        </div>
    );
}

export default AboutMe;