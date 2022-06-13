import './App.css';
import Header from "./components/Header";
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const notify = () => toast.success("Wow so easy!",{position:"top-center"});

  return (
    <div>
    <ToastContainer /> 
        <h1>this is react application</h1>
          <p>this is paragraph</p>
          <Button color="danger" onClick={notify}>Danger!</Button>
    
    </div>
  );
}

export default App;
