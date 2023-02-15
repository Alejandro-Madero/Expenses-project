import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 1, 14);
  console.log(expenseDate);
  return (
    <div className="expense-item">
      <div>asdasd</div>
      <div className="expense-item__description">
        <h2> Car Insurance </h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
