import { AppBar, Container, MenuItem, Select, ThemeProvider, Box, Typography, createTheme, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContex';



const Header = () => {
    const darkTheme = createTheme({
        palette:{
           mode:'dark',
        }
    })

    const {currency,setCurrency}= CryptoState()
    console.log(currency)
    
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <AppBar color='transparent' position='static'>
                    <Container>
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between',}}>
                            <Typography sx={{color:'gold',fontWeight:"bold"}} variant='h6'>
                                <Link to={'/'}>Crypto Hunter</Link>
                            </Typography>

                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Currency</InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              label="Currency"

                              value={currency}
                              onChange={(e)=>setCurrency(e.target.value)}
                            >
                              <MenuItem value={'USD'}>USD</MenuItem>
                              <MenuItem value={'BDT'}>BDT</MenuItem>
                            </Select>
                          </FormControl>

                        </Box>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </div>
    );
};

export default Header;