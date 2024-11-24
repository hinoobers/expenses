import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

const App = () => {
  const DUMMY_EXPENSES = [
    {
      date: new Date(2024, 10, 1),
      title: 'New book',
      price: 30.99,
      id: 'id1'
    },
    {
      date: new Date(2025, 1, 10),
      title: 'Old book',
      price: 12.99,
      id: 'id2'
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In app.js')
    console.log(expense)
  }

  function filterExpense(target) {
    console.log('Filter changed')
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={DUMMY_EXPENSES}/>
    </div>
  );
}

export default App;