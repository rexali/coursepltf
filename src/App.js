import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarResponsive from './widgets/NavbarResponsive';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarResponsive />
      <p>
        <button className='mb-1 btn btn-outline-info btn-sm mt-5'>I am ..</button><br />
        <Button className='mb-1' variant='success' size='sm'>Click me</Button><br />
        <Button>Primary</Button>
      </p>
    </div>
  );
}

export default App;
