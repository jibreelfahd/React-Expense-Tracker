import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpenseList = ({ expenseFilter }) => {
  // if (expenseFilter.length === 0) {
  //   return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  // }

  //another way to render conditional statements
  /*   let expenseContent = (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  );

  if (expenseFilter.length > 0) {
    expenseContent = expenseFilter.map((expenseItem) => (
      <ExpenseItem
        key={expenseItem.id}
        tittle={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />
    ));
  } */

  return (
    <ul className="expenses-list">
      {expenseFilter.map((expensesItems) => (
        <ExpenseItem
          key={expensesItems.id}
          tittle={expensesItems.title}
          amount={expensesItems.amount}
          date={expensesItems.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
