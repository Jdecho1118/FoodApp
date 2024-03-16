import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor() {
        super();
        // console.log("Parent constructor called")
    }

    componentDidMount() {
        // console.log("parent componentDidMount called")
    }

    render() {
        // console.log("Parent render called")
        return (
            <div className="container">
                This is about user component(class based)
                {/* <User name="Jitesh" location="Mumbai" contact="8454076460"/> */}
                <UserClass name="first child" location="Mumbai" contact="8454076460" />
                {/* <UserClass name="second child" location="Mumbai" contact="8454076460" />
                <UserClass name="Third child" location="Mumbai" contact="8454076460" /> */}
            </div>
        );
    }
}

export default About;
