import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  console.log("Entre en la funcion ExpensesFilter!");

  const selectHandler = (e) => {
    console.log("Entre en el handler del select");
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="years">Filter by year</label>
        <select
          id="years"
          name="years"
          value={props.selected}
          onChange={selectHandler}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
