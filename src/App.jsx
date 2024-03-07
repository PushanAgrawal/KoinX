import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Dash_dash  from './Components/Comp2'
import Comp2 from './Components/Comp2'
import Coin from './Components/Coin'
import Get_Started from './Components/Get_Started'
import axios from 'axios'
import Comment from 'postcss/lib/comment'
import Comp3 from './Components/Comp3'
import Comp4 from './Components/Comp4'
import { incrementprice , incrementprice2 , incrementprice3 , incrementprice4 } from './app/counter'
import { useSelector, useDispatch } from "react-redux";
// import { createProxyMiddleware } from 'http-proxy-middleware'

import Comp5 from './Components/Comp5'
function App() {
  const {price } = useSelector((state)=>state.counter)
  const dispatch =useDispatch()
  const [count, setCount] = useState(0)
  useEffect( () => {
    var response=""
    async  function getData(){
     response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
  params: {
    'ids': 'bitcoin',
    'vs_currencies': 'inr,usd',
    'include_24hr_change': 'true'
  },
  headers: {
    'accept': 'application/json'
  }
});

if (response){
  console.log(response.data["bitcoin"]["usd"])
      dispatch(incrementprice3(response.data['bitcoin']["usd"]))
      dispatch(incrementprice(response.data['bitcoin']["inr"]))
      dispatch(incrementprice2(response.data['bitcoin']["inr_24h_change"]))
      dispatch(incrementprice4(response.data['bitcoin']["usd_24h_changenr"]))
      console.log(price)
  }}
getData()

}, []);
  return (
    <>
    <div className='flex flex-col gap-4'>

    <Navbar></Navbar>
   <Comp2></Comp2>
   <Comp3></Comp3>
  
    </div>
    </>
  )
}

export default App
