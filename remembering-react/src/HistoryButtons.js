import React from 'react';

const HistoryButtons = (props) => {
	const renderButton = (i) => {
		return (
			<li>
				<button onClick={(i) => props.jumpTo(i)}>Back to Move {i}</button>
			</li>
		)
	}
	
}