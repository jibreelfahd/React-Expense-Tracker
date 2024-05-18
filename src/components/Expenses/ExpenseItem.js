import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

import './ExpenseItem.css'

const ExpenseItem = ({ date, tittle, price }) => {
	const [tittles, setTittle] = useState(tittle);

	const clickHandler = () => {
		setTittle('Updated!');
		console.log(tittles);
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date = { date } />
			<div className='expense-item__description'>
					<h2>{tittles}</h2>
					<div className='expense-item__price'>${price}</div>
					<button onClick = {clickHandler}>Change Tittle</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;