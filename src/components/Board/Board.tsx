import { FC } from 'react'
import cl from './Board.module.scss'
import BoardItem from '../BoardItem/BoardItem'
interface BoardProps {
	onClickTicket: Function
}
const Board: FC<BoardProps> = ({ onClickTicket }) => {
	return (
		<div className={cl.container}>
			<h1 className={cl.title}>Board</h1>
			<div className={cl.content}>
				<div className={cl.block}>
					<h3>Todo</h3>
					<BoardItem completedStatus={1} onClickTicket={onClickTicket} />
				</div>
				<div className={cl.block}>
					<h3>In progress</h3>
					<BoardItem completedStatus={2} onClickTicket={onClickTicket} />
				</div>
				<div className={cl.block}>
					<h3>Done</h3>
					<BoardItem completedStatus={3} onClickTicket={onClickTicket} />
				</div>
			</div>
		</div>
	)
}

export default Board
