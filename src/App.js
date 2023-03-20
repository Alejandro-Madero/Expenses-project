import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  console.log("avergaaa");
  const [expenses, setExpenses] = useState(getExpensesData);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* componentes custom tienen que empezar con mayuscula para que React los
      detecte. Elementos que empiezan con minuscula React entiende que son built in elementos de HTML  */}
    </div>
  );
};

const getExpensesData = () => {
  const expenses = JSON.parse(localStorage.getItem("expenses")).map(
    (expense) => {
      expense.date = new Date(expense.date);
      return expense;
    }
  );

  return expenses;
};

export default App;
