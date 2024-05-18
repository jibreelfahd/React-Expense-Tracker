import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem tittle = { expenses[0].title } price = { expenses[0].price } date = { expenses[0].date } />
      <ExpenseItem tittle = { expenses[1].title } price = { expenses[1].price } date = { expenses[1].date } />
      <ExpenseItem tittle = { expenses[2].title } price = { expenses[2].price } date = { expenses[2].date } />
      <ExpenseItem tittle = { expenses[3].title } price = { expenses[3].price } date = { expenses[3].date } />
    </Card>
  )
}

export default Expenses;