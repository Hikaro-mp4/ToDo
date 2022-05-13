
import AddTask from "./Components/AddTask";
import FilterTasks from "./Components/FilterTasks";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <AddTask/>
      <FilterTasks/>
      <Tasks/>
    </div>
  );
}

export default App;
