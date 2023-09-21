import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContex';

const CoinsTable = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    const {currency} = CryptoState

    const fetchcoins = async()=>{
        setLoading(true)
        const {data} = await axios.get(CoinList(currency))

        setCoins(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchcoins()
    },[currency])

    console.log(coins)


    return (
        <>
            <Box sx={{
                marginTop:"35rem"
            }}>
                
            </Box>
        </>
    );
};

export default CoinsTable;