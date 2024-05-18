import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem tittle = { expenses[0].title } amount = { expenses[0].amount } date = { expenses[0].date } />
      <ExpenseItem tittle = { expenses[1].title } amount = { expenses[1].amount } date = { expenses[1].date } />
      <ExpenseItem tittle = { expenses[2].title } amount = { expenses[2].amount } date = { expenses[2].date } />
      <ExpenseItem tittle = { expenses[3].title } amount = { expenses[3].amount } date = { expenses[3].date } />
    </Card>
  )
}

export default Expenses;