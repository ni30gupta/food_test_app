import { Grid } from '@mui/material'
import React from 'react'
import CustomButton from './CustomButton'

const LatestOffer = () => {
    return (
        <Grid container style={{ background: '#FFDCA6', padding: '50px 100px', flexDirection: 'column', position: 'relative', alignItems: 'center', justifyContent: 'center', height: "70vh" }}>
           <div style={{height:'70%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
           <div className="text_primary" >
                <h1 style ={{fontSize:50}}>Get Our Latest Offers!</h1>
                <p style={{marginTop:50, fontSize:20}}>Lorem ipsum dollar something nee dto change, this is a demo page, asking the default sytem and</p>
            </div>
            <div style={{ width: '80%' }}>
                <div>
                    <input
                        style={{
                            padding: 15,
                            border: 'none',
                            borderRadius: 20,
                            width: '100%',
                        }}
                        placeholder='Your Email' type="text" />
                </div>
                <div style={{
                    position: 'relative',
                    top: -46,
                    float: 'right'
                }}>
                    <CustomButton styles="primary" >subscribe</CustomButton>

                </div>
            </div>
           </div>
        </Grid>
    )
}

export default LatestOffer