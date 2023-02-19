import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const year = date.getFullYear();
  const month = date.toLocaleDateString("es-AR", { month: "long" });
  const day = date.toLocaleDateString("es-AR", { day: "numeric" });

  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
