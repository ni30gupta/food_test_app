import React from 'react'
import main_img from '../assets/img/main_img.avif'
import { Grid } from '@mui/material'
import CustomButton from './CustomButton'

const Main = () => {
    return (
        <Grid container >
            <Grid className='main_wrapper' item xs={12} sm={12} style={{
                backgroundImage: `url(${main_img})`,
                height: `calc(100vh - 30px)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
                padding: 50
            }}>
                <div style={{ width: '40%' }}>
                    <h1 className="heading">Mariachi</h1>
                    <p className='welocome_txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, dolor sit amet consectetur
                        molestiae quas vel sint</p>
                    <CustomButton styles='secondary'>
                        Order Now
                    </CustomButton>
                </div>
            </Grid>
        </Grid>
    )
}

export default Main