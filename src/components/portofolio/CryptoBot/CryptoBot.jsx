import React, { useState, useEffect } from 'react'
import ccxt from 'ccxt'

import './CryptoBot.css'

function CryptoBot() {
    console.log (ccxt.exchanges)
  const [ticker, setTicker] = useState({})

  useEffect(() => {
    const fetchTicker = async () => {
      const exchange = new ccxt.binance()
      const tickerData = await exchange.fetchTicker('BTC/USDT')
      setTicker(tickerData)
    }
    fetchTicker()
  }, [])

  return (
    <div>
      {ticker ? <p>{ticker.last}</p> : <p>Loading...</p>}
    </div>
  )
}
export default CryptoBot

