import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpenseList = ({ expenseFilter }) => {
  if (expenseFilter.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

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
