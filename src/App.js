import React,{useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";




const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

  return (
      <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          < Expenses items={expenses}/>
      </div>
  )

}

export default App;
