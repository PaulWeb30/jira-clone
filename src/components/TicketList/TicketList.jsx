import React from 'react'
import { useSelector } from 'react-redux'
import cl from './TicketList.module.scss'
const TicketList = ({ onClickTicket }) => {
	const { tickets } = useSelector(state => state.ticketsList)
	const colors = ['#FF0000', '#00D1FF', '#1400FF', '#FF00B8', 'purple', 'green']
	return (
		<div className={cl.container}>
			<h1 className={cl.title}>Ticket list</h1>
			<div className={cl.content}>
				{tickets &&
					tickets.map(t => (
						<div onClick={onClickTicket(t.id)} className={cl.block} key={t.id}>
							<p
								style={{
									background: colors[t.id],
								}}
								className={cl.user}
							>
								{t.name[0] + t.username[0]}
							</p>
							<p className={cl.text}>{t.title}</p>
							<p className={cl.status}>
								{t.completed === 1
									? 'Todo'
									: t.completed === 2
									? 'In progress'
									: t.completed === 3
									? 'Done'
									: 'Done'}
							</p>
						</div>
					))}
			</div>
		</div>
	)
}

export default React.memo(TicketList)
