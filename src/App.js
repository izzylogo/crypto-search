import axios from "axios";
import { useEffect, useState } from "react";
import Coins from "./components/Coins";
import Coin from './routes/Coin';
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import './index.css';

function App() {
  const [light, setLight] = useState(false)

  const [coins, setCoins] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const toogleTheme = () => {
    setLight(prevTheme => !prevTheme)
  }


  return (
    <div className={light ? 'light' : 'dark'}>
      <Navbar toogleTheme={toogleTheme} light={light}/>
      <Routes>
        <Route path='/' element={<Coins coins={coins} toogleTheme={toogleTheme} light={light}/>} />
        <Route path='/coin' element={<Coin />} toogleTheme={toogleTheme} >
          <Route path=":coinId" element={<Coin />} toogleTheme={toogleTheme}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
