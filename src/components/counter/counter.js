import { useState  , useEffect } from "react";
import "./style.css";

export function Counter(){
    
    let [tedad, calc]  = useState(0);    

    function increase(){
        calc(tedad+1)
    }
    function decrease(){
        calc(tedad-1)
    }
    useEffect(function(){document.title = tedad; }, [tedad]);
    return (
       <div className="counter">
         Counter: 
         <p id="counterShow">{tedad}</p>
         <button onClick={increase} className="btn-add">increase</button>
         <button onClick={decrease} className="btn-minus">decrease</button>
       </div>
    )
}