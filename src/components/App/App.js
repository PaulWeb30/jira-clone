import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../TicketList/TicketListSlice'
import { setTickets } from '../TicketList/TicketListSlice'
import TicketList from '../TicketList/TicketList'
import Board from '../Board/Board'
import cl from './App.module.scss'

function App() {
	
	const { tickets } = useSelector(state => state.ticketsList)
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(fetchTickets())
	}, [])

	const onClickTicket = React.useCallback((id) => {
		return () => {
			const ticketsCopy = JSON.parse(JSON.stringify(tickets))
			const ticket = ticketsCopy.find(t => t.id === id)
			if (ticket.completed !== 3) {
				ticket.completed += 1
			} 
			dispatch(setTickets(ticketsCopy))
		}
	},[])

	return (
		<div className={cl.wrapper}>
			<TicketList onClickTicket={onClickTicket} />
			<Board onClickTicket={onClickTicket} />
		</div>
	)
}

export default App
