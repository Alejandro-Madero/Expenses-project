import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  console.log(expenses);

  if (expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expenses were found !</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
