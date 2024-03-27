
import * as React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import { Icon } from './Icon';

const Breadcrumbs = (props:any)=>{
    const breadcrumbStyle = {
        ...props.style,
    }

    const handlePathClick = (index:any, item:any)=>{

      if(props.click){
      
        props.click(index,item)
      }
    }

    return (
        <div style={breadcrumbStyle} className="flex" >
          {props.crumbs.map((item:any,i:any)=>{
            return (
                typeof item==='string'?
                <div key={i}  
                className={` ${i+1!==props.crumbs.length ?
                    props['active-color']&&'text-'+props['active-color']||'text-primary'
                    :props.class||'text-grey'} flex row items-center `}>
                        <span className="pointer-cursor" onClick={()=>handlePathClick(i, item)}>
                          {item}
                        </span>
               
                    {i+1<props.crumbs.length&&<div className={`${props.class} flex items-center px-xs px-${props.paddinglr}`}>{props['icon-separator']&&<Icon name={props['icon-separator']} />||props?.separator||'/'}</div>}
                 </div> 
              :   <div key={i}    className={`${i+1!==props.crumbs.length ?
                props['active-color']&&'text-'+props['active-color']||'text-primary'
                :props.class||'text-grey'} flex row items-center `}>
                <div className='flex row items-center pointer-cursor' onClick={()=>handlePathClick(i, item.label)}><Icon name={item.icon} class="pr-xs" />
                
                <span>{item.to ? <Link to={item.to} className={`${props.class||'text-grey'}`} target={item.to&&props.target} style={{textDecoration:'none'}} >{item.label}</Link>:item.label}</span>
               </div>
                {i+1<props.crumbs.length&&<div className={`${props.class} flex items-center px-xs px-${props.paddinglr}`}>{props['icon-separator']&&<Icon name={props['icon-separator']} />||props?.separator||'/'}</div>}
           </div> 
            )
          })}

        </div>
    )
}

export { Breadcrumbs }