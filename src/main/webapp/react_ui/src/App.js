import './App.css';
import Header from "./components/Header";
import { Button, Container,Row,Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Employee from './components/Employee';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';
import Menus from './components/Menus';

function App() {

  const notify = () => toast.success("Wow so easy!",{position:"top-center"});

  return (
    <div>
    <ToastContainer /> 
      <Header />
     <Row>
      <Col md={4}>
        
        <Menus />
      </Col>
      <Col md={8}>
        <Home />
      </Col>
     </Row>
    </div>
  );
}

export default App;
