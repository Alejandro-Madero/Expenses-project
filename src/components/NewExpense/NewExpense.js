import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  console.log("Entre aca");
  const [isEditing, setIsEditing] = useState(false);

  const saveFormDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: crypto.randomUUID(),
    };
    props.onAddExpense(expense);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveFormData={saveFormDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
