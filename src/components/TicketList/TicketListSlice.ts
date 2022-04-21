import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTickets = createAsyncThunk('todos/fetchTodos', async () => {
	const response = await axios.get(
		'https://61f80652783c1d0017c4455d.mockapi.io/items'
	)
	return response.data
})
const initialState: ticketListInitialState = {
	tickets: [],
	ticketsLoadingStatus: 'loaded',
}
type Ticket = {
	name: string
	id: number
	username: string
	completed: 1 | 2 | 3
	title: string
	userId: number
}
interface ticketListInitialState {
	tickets: Ticket[]
	ticketsLoadingStatus: string
}
const ticketList = createSlice({
	name: 'ticketList',
	initialState,
	reducers: {
		setTickets: (state: ticketListInitialState, action) => {
			state.tickets = [...action.payload].sort((a, b) =>
				a.completed > b.completed ? -1 : 1
			)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTickets.pending, (state: ticketListInitialState) => {
				state.ticketsLoadingStatus = 'loading'
			})
			.addCase(fetchTickets.rejected, (state: ticketListInitialState) => {
				state.ticketsLoadingStatus = 'error'
			})
			.addCase(
				fetchTickets.fulfilled,
				(state: ticketListInitialState, action) => {
					state.tickets = action.payload
					state.ticketsLoadingStatus = 'loaded'
				}
			)
	},
})
export const { setTickets } = ticketList.actions
export default ticketList.reducer
