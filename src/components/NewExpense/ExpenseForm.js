import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTittle, setEnteredTittle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /*  Another way of using multiple use state */
  // const [userInput, setUserInput] = useState({
  //   enteredTittle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const tittleChangeHandler = (event) => {
    setEnteredTittle(event.target.value);
  /*
    setUserInput({
      ...userInput,
      enteredTittle: event.target.value
    }); 
  */
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  /*
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
   */
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
   /* 
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    }); 
  */
  }

  //To handle form data
  const formHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      tittle: enteredTittle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    //Passing the data on through props using a function and invoking it and passing the data through the function
    props.onSaveExpenseData(expenseData);

    //This is two way binding, passing data back into the form input
    setEnteredTittle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tittle</label>
          <input type="text" value={enteredTittle} onChange={tittleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );  
}

export default ExpenseForm;