import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const year = date.getFullYear();
  const month = date.toLocaleDateString("es-AR", { month: "long" });
  const day = date.toLocaleDateString("es-AR", { day: "numeric" });

  return (
    <div className="expense-date">
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
      <p className="expense-date__day">{day}</p>
    </div>
  );
}

export default ExpenseDate;
