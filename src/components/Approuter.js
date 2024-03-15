import App from "../App";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import {createBrowserRouter} from "react-router-dom";
import CustomError from "./CustomError";
import Menu from "./Menu";


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
            
        },
        {
            path : "menu/:resId",
            element : <Menu/>
        }
    ]
    }
]
)

export default Approuter;