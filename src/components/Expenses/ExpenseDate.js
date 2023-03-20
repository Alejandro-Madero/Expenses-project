import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleDateString("es-AR", { month: "long" });
  const day = date.toLocaleDateString("es-AR", { day: "numeric" });

  return (
    <div className="expense-date">
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__day">{day}</p>
    </div>
  );
};

export default ExpenseDate;
