import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  console.log("Entre en Expenses Chart");

  const expensesByMonth = props.expenses.reduce(
    (acc, el) => {
      const month = el.date.getMonth();
      acc[month].value += el.amount;
      return acc;
    },
    [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 },
    ]
  );

  return <Chart expenses={expensesByMonth} />;
};

export default ExpensesChart;
