import React, { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { fetchTickets } from '../TicketList/TicketListSlice'
import { setTickets } from '../TicketList/TicketListSlice'
import TicketList from '../TicketList/TicketList'
import Board from '../Board/Board'
import cl from './App.module.scss'

type Todo = {
	id: number
}
const App: FC = () => {
	const { tickets } = useAppSelector(state => state.ticketsList)
	const dispatch = useAppDispatch()
	React.useEffect(() => {
		dispatch(fetchTickets())
	}, [])

	const onClickTicket = (id: number) => {
		return () => {
			const ticketsCopy = JSON.parse(JSON.stringify(tickets))
			const ticket = ticketsCopy.find((t: Todo) => t.id === id)
			if (ticket.completed !== 3) {
				ticket.completed += 1
			}
			dispatch(setTickets(ticketsCopy))
		}
	}
	return (
		<div className={cl.wrapper}>
			<TicketList onClickTicket={onClickTicket} />
			<Board onClickTicket={onClickTicket} />
		</div>
	)
}

export default App
