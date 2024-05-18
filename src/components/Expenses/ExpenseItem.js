import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

import './ExpenseItem.css'

const ExpenseItem = ({ date, tittle, amount }) => {

	return (
		<Card className='expense-item'>
			<ExpenseDate date = { date } />
			<div className='expense-item__description'>
					<h2>{tittle}</h2>
					<div className='expense-item__price'>${amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;