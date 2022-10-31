
import './App.css';
import Welcome from './components/Welcome';

const names =['Brad', 'Gabby', 'Art',]

function App() {
  return (
    <>
    <h1>Passing Props</h1>
    <Welcome name={names[0]} greeting="Welcome" />
    </>
  );
}

export default App;
