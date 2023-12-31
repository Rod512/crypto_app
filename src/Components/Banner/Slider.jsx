import { Box } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../CryptoContex';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const Slider = () => {
    const [trending,setTrending] = useState([])
    const {currency, symbol} = CryptoState()

    const fetchcoins = async ()=>{
        const {data} = await axios.get(TrendingCoins(currency))

        setTrending(data)
    }
    console.log(trending)

    useEffect(()=>{
        fetchcoins()
    },[currency])

    const items = trending.map((coin)=>{
        const profit = coin.price_change_percentage_24h >= 0;
        return(
            <Link
            to={`/coins/${coin.id}`}
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                cursor:'pointer',
                textTransform:'capitalize',
                color:'white'
            }}
            >

            <img 
            src={coin?.image}
            alt={coin.name} 
            height="80" 
            style= {{ marginBottom: 10}}  />
            
            <span>
                {coin?.symbol}
                &nbsp
                <span
                style={{
                    color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                    fontWeight: 500,
                  }}
                >
                    {profit && "+"} {coin.price_change_percentage_24h?.toFixed(2)}
                </span>
            </span>

            <span style={{fontSize:22, fontWeight: 500}}>
                {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}

            </span>

            </Link>
        )
    })



    const responsive = {
        0:{
            items : 2,
        },
        512:{
            items: 4
        },

    }

    return (
        <Fragment>
            <Box component="div" sx={{
                height: '50%',
                display:'flex',
                alignItems:'center',
                marginTop: '50px',
            }}>

            <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            autoPlay
            items={items}
            >


            </AliceCarousel>
            
            </Box>
        </Fragment>
    );
};

export default Slider;