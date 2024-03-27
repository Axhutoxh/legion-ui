import * as React from "react";
import { Icon } from "./Icon";
import { adjustFontSize, formatPx, getAvatarText } from "../utils/helper";


const Avatar =(props:any)=>{

  const avatarColor = props?.bgColor==='white'&&props['text-color']==='white'?'black':props['text-color']||'white';

  const avatarStyle ={    
      width: props.size ? formatPx(props.size):'24px',
      height: props.size ? formatPx(props.size):'24px',
      padding:props.icon && '2px',
      border: `${props?.border ||'0px'} solid ${props['border-color']||avatarColor}`,
      borderRadius: props.square?'0%': props.rounded?'12%':'50%',
      fontSize:props.src?'0px': `${adjustFontSize(props?.size||'24px',props['font-size']?props['font-size']:'16px')}px`,
      color:props['font-color']||'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: props?.color||'skyblue', 
      backgroundImage: props['icon-outlined']||props['icon']||`url(${props.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition:'center',
      cursor:props?.onClick&&'pointer',
     ...props.style
      }

  return (
    <div style={avatarStyle} className={props.class} onClick={props.onClick}>
      {props.icon || props['icon-outlined']?
        <Icon name={props.icon} color={props['icon-color']} size={props['icon-size']} outlined={ props['icon-outlined']} sharp={ props['icon-sharp']} two-tone={ props['icon-two-tone']} class={props['icon-class']} style={props['icon-style']} />
      : typeof props.children==='string'&& <div>{props.imgSrc?'':getAvatarText(props?.children)}</div> }
        

    </div>
  );
};




export {Avatar}