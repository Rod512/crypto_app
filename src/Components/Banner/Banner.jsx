import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Slider from './Slider';

const Banner = () => {
    const imageurl = 'https://github.com/Rod512/crypto_app/assets/88203053/051a8e5f-2a25-412c-aacc-ef8b9f4a0239'
    return (
        <Box component="div" sx={{
            position: 'absolute',
            width: '100%',
            height: 550,
            backgroundImage: `url(${imageurl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Container sx={{
                display:'flex',
                flexDirection:'column',
                paddingTop: 25,
                justifyContent:'space-aroud',
            }}>
            
            <Box component='div' sx={{
                display:'flex',
                flexDirection:'column',
                height:'40%',
                justifyContent:"center",
                alignItems:'center'
            }}>
                <Typography variant='h2'
                style={{
                    fontWeight:'bold',
                    marginBottom: 15,
                    fontFamily:'Montserrat'
                }}
                >
                Crypto Tracker
                </Typography>

                <Typography
                variant='subtitle2'
                style={{
                    color:'darkgrey',
                    textTransform:'capitalize',
                    fontFamily:'Montserrat'
                }}
                >
                Get all the info regarding your favourite crypto currency
                </Typography>
            </Box>
            <Slider/>

            </Container>
        </Box>
    );
};

export default Banner;