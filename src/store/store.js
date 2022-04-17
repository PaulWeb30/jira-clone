import { configureStore } from '@reduxjs/toolkit'
import ticketsList from '../components/TicketList/TicketListSlice'
const store = configureStore({
	reducer: {
		ticketsList,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export default store
