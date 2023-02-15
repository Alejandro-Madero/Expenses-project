import ExpenseItem from "./components/ExpenseItem";

function App() {
  console.log("hola", App);
  return (
    <div className="App">
      <h1>Lets get started!</h1>
      {/* componentes custom tienen que empezar con mayuscula para que React los
      detecte. Elementos que empiezan con minuscula React entiende que son built in elementos de HTML  */}
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
