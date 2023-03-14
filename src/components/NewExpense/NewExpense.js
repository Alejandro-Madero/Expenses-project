// import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  console.log("Entre aca");
  const saveFormDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: crypto.randomUUID(),
    };
    props.onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveFormData={saveFormDataHandler} />
    </div>
  );
};

export default NewExpense;
