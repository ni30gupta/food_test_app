import React from 'react'

const CustomButton = (props) => {
    const getColor = (styles)=> {
        switch (styles) {
            case "primary":
                return {
                     background:"#61002E",
                    color:"#FFDCA6"
                }
        
            case "secondary":
                return {
                    background:"#FFDCA6",
                    color:"#61002E"
                 
                }
        
            default:
                break;
        }
    }
  return (
    <button style={{...getColor(props.styles),  fontWeight:'bold', letterSpacing:1}} className='custom_btn'>
        {props.children.toUpperCase()}
    </button>
  )
}

export default CustomButton