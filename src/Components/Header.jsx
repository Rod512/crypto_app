import { AppBar, Container, MenuItem, Select, ThemeProvider, Box, Typography, createTheme, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    const darkTheme = createTheme({
        palette:{
           mode:'dark',
        }
    })
    
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <AppBar color='transparent' position='static'>
                    <Container>
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between',}}>
                            <Typography sx={{color:'gold',fontWeight:"bold"}}>
                                <Link to={'/'}>Crypto Hunter</Link>
                            </Typography>

                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Currency</InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              label="Currency"
                            >
                              <MenuItem value={'USD'}>USD</MenuItem>
                              <MenuItem value={'INR'}>INR</MenuItem>
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