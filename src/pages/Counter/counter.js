import { useState  , useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export function Counter(){
    
    let [tedad, calc]  = useState(0);    

    function increase(){
        calc(tedad+1)
    }
    function decrease(){
        calc(tedad-1)
    }
    useEffect(function(){
                        document.title = tedad; 
                        }
                        ,[tedad]);
    return (
            <Fragment>
                <div className="counter">
                    Counter: 
                    <p id="counterShow">{tedad}</p>
                    <button onClick={increase} className="btn-add">increase</button>
                    <button onClick={decrease} className="btn-minus">decrease</button>
                    <div >
                    <Link to="/"> go to home</Link>
                    </div>
                </div>
            </Fragment>
        )
}