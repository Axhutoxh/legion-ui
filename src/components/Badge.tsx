import * as React from 'react';
import { checkPropsIsString } from 'utils/helper';



const Badge = (props:any)=>{

  
    const badgeStyle={
        ...props.style,
        width:(checkPropsIsString(props.children)||props.label)&&'fit-content'|| props['indicator-size']||'8px',
        height:(checkPropsIsString(props.children)||props.label)&&'fit-content'||props['indicator-size']||'8px',
        color: props.outline&& props.color|| props['font-color']||'white',
        border:props.outline&&`1px solid ${props.color}`,
        padding:props?.padding||(checkPropsIsString(props.children)||props.label) ? props.rounded ?'2px 6px':'3px' :'0px',
        borderRadius: props.rounded ? '8px' 
                    : props?.square ? '0%' 
                    : (checkPropsIsString(props.children)||props.label) ? '4px'
                    : '50%',
        backgroundColor: props.outline&&'transparent'||props?.color||'skyblue',
        fontSize: props['font-size']||'12px',
        lineHeight: '12px',
        minHeight: (checkPropsIsString(props.children)||props.label)&&'12px',
        opacity:props.transparent ? 0.8
               : 1,
        display: props.align ? 'inline-flex':'',
        alignItems: 'center',
        verticalAlign: props.align,
        margin:props?.align&&'2px'

    }

    return (
    <span>
        <div className={`${props.class} lu-badge`} style={badgeStyle} >
             {checkPropsIsString(props.children)&&props.children||props.label}
        </div>
    </span>

            

    )
}

export {Badge}