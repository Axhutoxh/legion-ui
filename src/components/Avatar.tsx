import * as React from "react";
import { Icon } from "./Icon";
import { adjustFontSize, formatPx, getAvatarText } from "../utils/helper";


const Avatar =(props:any)=>{

  const avatarColor = props?.bgColor==='white'&&props['text-color']==='white'?'black':props['text-color']||'white';





    const avatarStyle ={    
      width: props.size ? formatPx(props.size):'20px',
      height: props.size ? formatPx(props.size):'20px',
      border: `${props?.border ||'0px'} solid ${props['border-color']||avatarColor}`,
      borderRadius: props.square?'0%': props.rounded?'12%':'50%',
      fontSize:props.src?'0px': `${adjustFontSize(props?.size||'20px',props['font-size'])}px`||'16px',
      color:props['font-color']||'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props?.color||'skyblue', 
      backgroundImage: props['icon-outlined']||props['icon']||`url(${props.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition:'center',
     ...props.style
      }


  return (
    <div style={avatarStyle} className={props.class}>
   

      {props.icon || props['icon-outlined']?
        <Icon name={props.name} color={props['icon-color']} size={props['icon-size']} outlined={ props['icon-outlined']}  />
      : typeof props.children==='string'&& <div>{props.imgSrc?'':getAvatarText(props?.children)}</div> }
        

    </div>
  );
};




export {Avatar}