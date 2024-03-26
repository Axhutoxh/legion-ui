import * as React from 'react';
const Banner = (props:any)=>{
    const bannerStyle ={
        ...props.style,
        background: props.dark&&'#2e2e2e ',
        color:props.dark&&'white',
        display:props.inline&&'flex',
        justifyContent:props.inline&&'space-between'
    }

    return (
        <div style={bannerStyle} className={`${props.class} ${props.dense ?'pa-xs':'pa-md'} `} >
            {props.children}
        </div>
    )
}

export {Banner}