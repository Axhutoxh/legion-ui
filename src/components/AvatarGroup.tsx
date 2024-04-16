import * as React from "react";
import { adjustFontSize } from "../utils/helper";


const AvatarGroup = (props:any) =>{

    const [group,setGroup]= React.useState([])
    const avatarColor = props?.bgColor==='white'&&props['text-color']==='white'?'black':props['text-color']||'white';

    const avatarGroupStyle = {
        display: 'flex',
        flexDirection: props.column?'column': 'row',
        ...props.style
    
    
      } 
  
  
    React.useEffect(()=>{
      const remaningFlag = {flag:true}
     const data = props.children.map((child:any,index:any) =>{
        const avatarComponent = {...child}
        const avatarComponentProps = {...child.props}
        const avatarComponentStyle = {
          marginLeft: `-${adjustFontSize(props?.size||'24px',props['font-size']?props['font-size']:'18px')}px`,
          width:props.max&& '24px',
          height:props.max&& '24px',
          fontSize:props.max && '12px',
          display:props.max && 'flex',
          alignItems:props.max && 'center',
          justifyContent:props.max && 'center',
          backgroundColor:props.max && (props['max-color']||'skyblue'),
          borderRadius:'50%',
          border: `${props?.border ||'0px'} solid ${props['border-color']||avatarColor}`,
  
        }
        avatarComponentProps.size = props?.size || '24px'
  
  
        const maxSize = props.max || props.children.length
        const remaningSize = props.children.length - props.max||0
       
  
        if(avatarComponent.type.name==='Avatar'&&index<maxSize){
          return <div key={index} style={props.overlapping&&avatarComponentStyle} >{avatarComponent}</div>
         }
        if(remaningSize&&remaningFlag.flag){
          remaningFlag.flag = false
          return    <div key={index} style={props.overlapping&&avatarComponentStyle} >+{remaningSize}</div>
        }
       
        })
      setGroup(data)
    },[props])
  

    return (
      <div style={avatarGroupStyle}  className={`${props.class&&'animate-avatar-group'} lu-avatar-group`} >
        {group}
      </div>
    );
  
  }


  export {AvatarGroup}