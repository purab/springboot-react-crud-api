import './App.css';
import Header from "./components/Header";
import { Button, Container,Row,Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Employee from './components/Employee';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';
import Menus from './components/Menus';
import {  BrowserRouter, Routes,Switch, Route, Link} from "react-router-dom";

function App() {

  const notify = () => toast.success("Wow so easy!",{position:"top-center"});

  return (
    <div>
      <BrowserRouter>
          <ToastContainer /> 
          <Header />
        <Row>
          <Col md={4}>
            
            <Menus />
          </Col>
          <Col md={8}>
            <Routes>
              <Route exact path="/" element={<Home />}  />
              <Route exact path="/home"  element={<Home />}  />
              <Route exact path="/add-employee"  element={<AddEmployee />} />
              <Route exact path="/view-employees" element={<AllEmployees />}  />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
