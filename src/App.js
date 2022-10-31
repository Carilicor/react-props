
import './App.css';
import Welcome from './components/Welcome';

const names =['Brad', 'Gabby', 'Art', 'Gerly',]

function App() {
  return (
    <>
    <h1>Passing Props</h1>
    {names.map(name =>(
      <Welcome key={name} name={name} />
    ))}
    {/* <Welcome name={names[0]}/> //greeting="Welcome Back" 
    <Welcome name={names[1]} /> //greeting="Thanks for coming " 
    <Welcome name={names[2]} />//greeting="Thanks for helping" 
    <Welcome name="Gerly" />//greeting="You rock" */}
    </>
  );
}

export default App;
