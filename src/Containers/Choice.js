import React from 'react';
import Button from '../Components/Button';
const Choice = function(props){
    return (
        <>
        <Button onclick={props.onClick} value="X" />
        {" "}
        <Button onclick={props.onClick} value="0" />
        </>
    );
}
export default Choice;