import { Grid } from '@mui/material'
import React from 'react'
import CustomButton from './CustomButton'
import food_collage from '../assets/img/food_collage.png'

const MenuOffer = () => {
  return (
    <Grid container style={{background:'#FFDCA6', alignItems:'center', justifyContent:'center', height:"90vh"}}>
    <Grid className='menu_text' item xs={6} sm ={6} style={{height:'70%', padding:'120px 0px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
       <h1 style={{textAlign:'center'}}>
        Don't Miss Our Menu!
       </h1>
       <p>Lorem ipsumdollar something nee dto change, this is a demo page, i am a react developer, must try our special tikki.</p>
        <CustomButton styles='primary'>
            see menu
        </CustomButton>
    </Grid>
    <div style={{width:'100%', height:'50%', overflow:'hidden'}}>

    <img width={"100%"}  src={food_collage} alt="" />
    </div>
</Grid>
  )
}

export default MenuOffer