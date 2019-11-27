import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Info.css'
const Info=function(props){
    return (
        <div>
    <p className="display-4 white">{props.info}</p>
        </div>
    );
}
export default Info;