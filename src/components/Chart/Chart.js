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
              key={expense.label}
              label={expense.label}
              value={expense.value}
              maxValue={maxValue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
