import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Button=function(props){
    var bool=false;
    var btn="btn btn-outline-primary";
    if(props.started===true && props.value!=='.'){
        bool=true;
        btn="btn btn-primary";
    }
    
    return (
<><button className={btn} id={props.id} onClick={props.onclick} disabled={bool}>{props.value}</button>{' '}</>
    );
}
export default Button;