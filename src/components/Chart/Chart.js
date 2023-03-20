import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const expensesByMonth = props.expenses.map((expense) => expense.value);
  const maxValue = Math.round(Math.max(...expensesByMonth));

  return (
    <div className="chart">
      <div className="chartbar-container">
        {props.expenses.map((expense) => {
          return (
            <ChartBar
              label={expense.label}
              value={expense.value}
              height={`${Math.round((expense.value / maxValue) * 100) || 0}%`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
