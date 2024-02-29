import Cardcontainer from './Cardcontainer';
import Footer from "./Footer";
import React from 'react';
import { Fragment } from 'react';
import Carousel  from './Carousel';

const Body = () =>{
    console.log("react", React);
    return(
            <Fragment>
                <Carousel/>
                <Cardcontainer/>
                <Footer/>
            </Fragment>
    )
}
export default Body;