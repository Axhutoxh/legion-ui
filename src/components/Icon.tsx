import 'material-icons/iconfont/material-icons.css';
import * as React from 'react';


const Icon = (props:any)=>{
    const iconStyle = {
        ...props.style,
        color:props.color,
       fontSize:props.size
    }



    return (
        <>
            { 
                props.outlined ?
                     (<span className={`${props.class} material-icons-outlined`} style={iconStyle} >{props.name}</span>) 
                : props.sharp ? 
                     ( <span className={`${props.class} material-icons-sharp`} style={iconStyle} >{props.name}</span>)  
                : props['two-tone'] ?
                     (    <span className={`${props.class} material-icons-two-tone`} style={iconStyle} >{props.name}</span> )
                :    (    <span className={`${props.class} material-icons`} style={iconStyle}   >{props.name}</span>)
            }
        </>
    )
}

export {Icon}