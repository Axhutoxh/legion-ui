import * as React from 'react';
const Banner = (props:any)=>{
    const bannerStyle ={
        ...props.style,
        width:'100vw',
        background: props.dark?'#2e2e2e':'skyblue',
        color:props.dark&&'white',
        display:props.inline&&'flex',
        justifyContent:props.inline&&'space-between',
        borderRadius: props.rounded ? '8px' 
        : props?.square ? '0%' 
        :'4px'

    }

    return (
        <div style={bannerStyle} className={`${props.class} ${props.dense ?'pa-xs':'pa-lg'} lu-banner`} >
            {props.children}
        </div>
    )
}

export {Banner}