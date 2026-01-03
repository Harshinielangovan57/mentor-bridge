import logo from './logo.svg';
import './App.css';
import { AddItem } from './Modules/AddItem';
import { Todos } from './Modules/Todos';

function App() {
  return (
    <div >
      <AddItem/>
      <Todos />

    </div>
  );
}

export default App;
