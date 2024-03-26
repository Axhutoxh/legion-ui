import * as React from "react"
import { Icon } from "./Icon"
const Button = (props:any)=>{

    const btnStyle={
        ...props.style,
        border:props.flat&&'0px'||`1px solid ${props.outline&&props['font-color']||props.color||'black'}`,
        height:props.height||props.square||props.circle?props.children?'':'20px':'',
        width:props.width||props.square||props.circle?props.children?'':'20px':'',
        background:props.glossy&&`linear-gradient(0deg, rgba(255, 255, 255, 0.6), transparent)`,
        backgroundColor:props.outline ?'white'
                       :props.color,
        color:props.outline ?props['font-color']||props.color
             :'',
        fontSize:props.outline ?props['font-color']||props.color
                :'14px',
        padding:props.dense 
                ? '0.285em'
                :'4px 16px' ,
        borderRadius:props.square 
                     ? '0%'
                    :props.circle
                     ? '50%'
                     :'8%',
        display:'inline-flex',
        flexDirection: props.icon||props['icon-right']?'row'
                     : 'column',
        alignItems: 'stretch',
        position:'relative',
        lineHeight:'1.715em',
        fontWeight:'500',
        textTransform: 'uppercase',
        textAlign:'center',
        minHeight:props.dense?'2em':'2.572em'
    
    }

    return(
        <button style={btnStyle} className={`${props.class} btn-effect`}  >
            {props.icon&&<Icon name={props.icon} outlined class="pr-2xs"  />}
            {typeof props.children==='string'&&props.children}
            {props['icon-right']&&<Icon name={props['icon-right']} outlined class="pl-2xs"/>}
        </button>
    )

}

export {Button}