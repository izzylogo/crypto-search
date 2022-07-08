import React from 'react'
import './Coins.css'

const CoinItem = (props) => {

  const check = props.coins.price_change_percentage_24h > 0

  return (
    <div className={props.light ? 'light-coin-row' : 'coin-row'}>
        <p>{props.coins.market_cap_rank}</p>
        <div className="img-symbol">
            <img src={props.coins.image} alt="" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p
          style={{
            color: '#5FD068'
          }}
        >${props.coins.current_price.toLocaleString()}</p>
        <p
          style={{
            color: check ? '#5FD068' : '#EB1D36'
          }}
        >{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile' 
          style={{
            color: '#5FD068'
          }}
        >${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'
          style={{
            color: '#5FD068'
          }}
        >${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem