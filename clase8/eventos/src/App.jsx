import './App.css';

function App() {
  function handleSubmit(evento){
    evento.preventDefault();
    console.log("Handler button");
  }

function handlerKeyDown(evento){
  const vocales = 'aeiou'.split('');
  const tecla = evento.key;
  if(vocales.includes(tecla)){
    evento.preventDefault();
  }
}
  return (
    <div className="App">
      <form action="">
        <input type="text" onKeyDown={handlerKeyDown} placeholder='Ingrese texto sin vocales' />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
