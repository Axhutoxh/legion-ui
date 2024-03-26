import * as React from 'react';


const Badge = (props:any)=>{

    const badgeStyle={
        ...props.style,
        width:props.children&&'fit-content'|| props['indicator-size']||'8px',
        height:props.children&&'fit-content'||props['indicator-size']||'8px',
        color: props.outline&& props.color|| props['font-color']||'white',
        border:props.outline&&`1px solid ${props.color}`,
        padding:props?.padding||props.children ? props.rounded ?'2px':'2px 6px' :'0px',
        borderRadius: props.rounded ? '8px' 
                    : props?.square ? '0%' 
                    : props.children ? '4px'
                    : '50%',
        backgroundColor: props.outline&&'transparent'||props?.color||'skyblue',
        fontSize: props['font-size']||'12px',
        lineHeight: '12px',
        minHeight: props.children&&'12px',
        opacity:props.transparent ? 0.8
               : 1,
        display: props.align ? 'inline-flex':'',
        alignItems: 'center',
        verticalAlign: props.align,
        margin:props?.align&&'2px'

    }

    return (
    <div>
        <div className={`${props.class}`} style={badgeStyle} >
            {props.children}
        </div>
    </div>

            

    )
}

export {Badge}