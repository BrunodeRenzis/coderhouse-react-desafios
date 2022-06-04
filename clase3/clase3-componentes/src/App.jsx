import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <ItemListContainer greeting="Hola! bienvenido"/>
    </div>
  );
}

export default App;