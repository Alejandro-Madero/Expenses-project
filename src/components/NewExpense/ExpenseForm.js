import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = function (e) {
    setTitle(e.target.value);
  };
  const amountChangeHandler = function (e) {
    setAmount(e.target.value);
  };
  const dateChangeHandler = function (e) {
    setDate(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveFormData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="e.g. 'Bycicle'"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="e.g. 1800"
            min="0"
            step="0.1"
            value={amount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            min="2023-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
