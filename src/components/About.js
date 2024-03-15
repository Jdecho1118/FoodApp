import User from "./User";
import userClass from "./UserClass";

const About = () => {
    return(
        <div className="container">
            This is about user component
            <User name="Jitesh" location="Mumbai" contact="8454076460"/>
            <userClass name="Jitesh(class)" location="Mumbai" contact="8454076460" />
        </div>
    )
}

export default About;