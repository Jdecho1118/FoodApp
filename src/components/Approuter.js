import App from "../App";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import {createBrowserRouter} from "react-router-dom";
import CustomError from "./CustomError";


const Approuter =createBrowserRouter([
    {
        path: "/",
        element : <App/>,
        errorElement : <CustomError/>,
        children : [
        {
            path : "about",
            element : <About/>,
            
        },
        {
            path : "contact",
            element : <Contact/>,
    
        },
        {
            path : "",
            element : <Body/>,
            
        }
    ]
    }
]
)

export default Approuter;