import React from 'react'
import { useSelector } from 'react-redux'
import cl from './BoardItem.module.scss'
const BoardItem = ({ completedStatus, onClickTicket }) => {
	const colors = ['#FF0000', '#00D1FF', '#1400FF', '#FF00B8', 'purple', 'green']
	const { tickets } = useSelector(state => state.ticketsList)
	return (
		<>
			{tickets &&
				tickets
					.filter(t => t.completed === completedStatus)
					.map((t, idx) => (
						<div key={t.id} onClick={onClickTicket(t.id)} className={cl.el}>
							<p
								style={{
									background: colors[idx],
								}}
								className={cl.user}
							>
								{t.name[0] + t.username[0]}
							</p>
							<p className={cl.text}>{t.title}</p>
						</div>
					))}
		</>
	)
}

export default BoardItem
