import { Link } from "react-router-dom";
import { Fragment } from "react";

export function HomePage(){
    return(
        <Fragment>
            <div>
                <h1>THIS IS HOME PAGE</h1>
                <Link to="/counter">go to counter </Link>
            </div>            
        </Fragment>
    )
}