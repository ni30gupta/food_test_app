import { Grid } from '@mui/material'
import React from 'react'
import about_img from '../assets/img/about_img.png'
import CustomButton from './CustomButton'

const About = () => {
    return (
        <Grid container style={{ background: '#FFDCA6',padding:'50px 100px', position:'relative', alignItems: 'center', justifyContent: 'center', height: "90vh" }}>
            <Grid item xs={6} sm={6} >
                <img width={'90%'} src={about_img} alt="" />
            </Grid>
            <Grid className="about_txt" item xs={6} sm={6}>
                <h1>About Mariachi</h1>
                <p>Lorem ipsumdollar something nee dto change, this is a demo page, i am a react developer, must try our something nee dto change, this is a demo page, special tikki.</p>
            <CustomButton styles="primary">Tell me more</CustomButton>
            </Grid>
        </Grid>
    )
}

export default About