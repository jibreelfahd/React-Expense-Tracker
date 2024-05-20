import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  //this is a computed/derived value
/*   let filterInfoText = '2019, 2021, 2022';

  if (filteredYear === '2019') {
    filterInfoText = '2020, 2021, 2022';
  } else if (filteredYear === '2021') {
    filterInfoText = '2019, 2020, 2022';
  } else if(filteredYear === '2022') {
    filterInfoText = '2019, 2020, 2021';
  } 
*/

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem tittle = { expenses[0].title } amount = { expenses[0].amount } date = { expenses[0].date } />
      <ExpenseItem tittle = { expenses[1].title } amount = { expenses[1].amount } date = { expenses[1].date } />
      <ExpenseItem tittle = { expenses[2].title } amount = { expenses[2].amount } date = { expenses[2].date } />
      <ExpenseItem tittle = { expenses[3].title } amount = { expenses[3].amount } date = { expenses[3].date } />
    </Card>
  )
}

export default Expenses;