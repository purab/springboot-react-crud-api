import './App.css';
import Header from "./components/Header";
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Employee from './components/Employee';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';

function App() {

  const notify = () => toast.success("Wow so easy!",{position:"top-center"});

  return (
    <div>
    <ToastContainer /> 
      
      <Home />        
      <Button color="danger" onClick={notify}>Danger!</Button>
      <AllEmployees />
      <AddEmployee />
    </div>
  );
}

export default App;
