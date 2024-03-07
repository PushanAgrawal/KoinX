import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
    inr: 0,
    inr_24h_change: 0,
    usd: 68726,
    usd_24h_change: 3.6767559459431545
 
}

export const counterSlice = createSlice({
  name: 'counter',
  
  initialState,
  reducers: {
   
    incrementprice: (state, action) => {
      state.inr = action.payload
    },
    incrementprice2: (state, action) => {
      state.inr_24h_change = action.payload
    },
    incrementprice3: (state, action) => {
      state.usd = action.payload
    },
    incrementprice4: (state, action) => {
      state.usd_24h_change = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementprice , incrementprice2, incrementprice3, incrementprice4 } = counterSlice.actions

export default counterSlice.reducer