import './App.css';

const  Greeting = ({userName}) => {
  return <h1>Hello {userName}</h1>
}

const  App = () => {
  const userName = "Ayush";
  return (
    <div className="App">
      <Greeting userName ="Ayush"/>
    </div>
  );
}

export default App;
