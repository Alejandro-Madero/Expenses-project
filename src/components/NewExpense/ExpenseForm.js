// import { useState } from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" name="title"></input>
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input type="number" min="0" step="0.1" name="amount"></input>
        </div>
        <div className="new-expense__control">
          <label for="date">Date</label>
          <input
            type="date"
            name="date"
            min="2023-01-01"
            max="2023-12-31"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
