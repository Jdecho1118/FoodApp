import Cardcontainer from './Cardcontainer';
import Footer from "./Footer";
import React from 'react';
import { Fragment } from 'react';

const Body = () =>{
    console.log("react", React);
    return(
            <Fragment>
                
                <Cardcontainer/>
                <Footer/>
            </Fragment>
    )
}
export default Body;