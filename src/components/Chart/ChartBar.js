import "./ChartBar.css";
const ChartBar = (props) => {
  console.log(props.height);
  return (
    <div className="chart-bar">
      <h2 className="chart-bar__label">{props.label}</h2>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: props.height }}></div>
      </div>

      <p className="chart-bar__label">${props.value}</p>
    </div>
  );
};
export default ChartBar;
