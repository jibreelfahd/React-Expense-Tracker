import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filtering the expenses by year
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenseFilter={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

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
