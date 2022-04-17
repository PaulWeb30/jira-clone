import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTickets = createAsyncThunk('todos/fetchTodos', async () => {
	const response = await axios.get('https://61f80652783c1d0017c4455d.mockapi.io/items')
	return response.data
})

const ticketList = createSlice({
	name: 'ticketList',
	initialState: {
		tickets: [],
		ticketsLoadingStatus: 'loaded',
	},
	reducers: {
		setTickets: (state, action) => {
			state.tickets = [...action.payload].sort((a, b) =>
				a.completed > b.completed ? -1 : 1
			)
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTickets.pending, state => {
				state.ticketsLoadingStatus = 'loading'
			})
			.addCase(fetchTickets.rejected, state => {
				state.ticketsLoadingStatus = 'error'
			})
			.addCase(fetchTickets.fulfilled, (state, action) => {
				state.tickets = action.payload
				state.ticketsLoadingStatus = 'loaded'
			})
	},
})
export const { setTickets } = ticketList.actions
export default ticketList.reducer
