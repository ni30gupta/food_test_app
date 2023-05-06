import React from 'react'
import dishes from '../assets/img/dishes.jpg'
import { Grid } from '@mui/material'
const Dishes = () => {
    return (
        <Grid container style={{
            background: `url(${dishes})`,
            position: 'relative',
            height: "80vh",
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
            <div style={{
                height: '100%', width: '100%', margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', /* adjust the alpha value as needed */
                zIndex: 1
            }}>
                <div style={{ display: 'flex',  height:'100%',justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}> 
                    <p style={{ fontSize: 30, textAlign: 'justify', width: '50%' }}>
                        The information contained or forming part of , including any attachments, is strictly private, confidential and may be privileged. Any dissemination, publication, use, review, and  any distribution, printing or copying of this message.
                    </p>
                    <p style={{ fontSize: 30, marginTop:20}}>Nitish Gupta</p>
                </div>
            </div>
        </Grid>
    )
}

export default Dishes