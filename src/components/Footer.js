// import { Facebook } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Instagram, Twitter, WhatsApp } from '@mui/icons-material';
const Footer = () => {
    return (
        <Grid container spacing={2} style={{ background: '#61002E', justifyContent: 'center', height: "70vh" }}>
            <Grid item xs={12} md={6} style={{ padding: "0px 70px", display: 'flex', justifyContent: 'center', flexDirection: 'column', }} >
                <h1>Mariachi</h1>
                <p style={{ margin: "20px 0px" }}>The information contained or forming part of this message, including any attachments, is strictly private, confidential and may be privileged. Any dissemination, publication, use, review, distribution, printing or copying of this message in </p>
                <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
                    <div className="icon_container"><FacebookRoundedIcon /></div>
                    <div className="icon_container"><Instagram /></div>
                    <div className="icon_container"><Twitter /></div>
                    <div className="icon_container"><WhatsApp /></div>
                </div>
            </Grid>
            <Grid item xs={12} md={2} style={{ display: 'flex', alignItems: 'center' }}  >
                <ul className="menu_list">
                    <h4>About</h4>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Brand Guidelienes</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={2} style={{ display: 'flex', alignItems: 'center' }}  >

                <ul className="menu_list">
                <h4>Services</h4>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Brand Guidelienes</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={2} style={{ display: 'flex', alignItems: 'center' }}  >

                <ul className="menu_list">
                <h4>About</h4>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Brand Guidelienes</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default Footer