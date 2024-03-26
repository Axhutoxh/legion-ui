

export  const formatPx = (size:any)=>{
    if(size.includes('px')){
        return size
    }
    return (+size)+'px'
}

export const removePx = (value:any)=>{

    if(value&&value.includes('px')){
        return +value.replace('px','')
    }
    return +value
}

export const getAvatarText =(value:any)=>{
    const text = value.split(' ')
    if(text.length>1){
      return text[0][0].toUpperCase()+text[1][0].toUpperCase()
    }
    return text[0][0].toUpperCase()
  }

export const adjustFontSize = (size:any,text_size:any)=>{
    const bodySize = removePx(size)
    const fontSize = removePx(text_size)
    const cal_size = bodySize
    const textSize = fontSize

    if(textSize>cal_size || textSize+10 > cal_size)
        return cal_size/2
    return textSize>=16 ? textSize :16
}