import { Grid } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <Grid container spacing={2} style={{ background:'#61002E', justifyContent:'center', position:'sticky', top:0, zIndex:20}}>
            <Grid item xs={8} sm ={4} >
                <ul style={{display:'flex', position:'relative', top:-6, justifyContent:'space-around', alignItems:'center', color:'white', height:30, listStyle:'none'}}>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>MENU</li>
                    <li>OFFERS</li>
                    <li>CONTACT</li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default Header