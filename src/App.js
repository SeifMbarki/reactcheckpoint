import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavDropdown} from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="navstl">
      <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home"><img className="logo" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-512.png" alt=""></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="stlel">Home</Nav.Link>
      <Nav.Link href="#link" className="stlel">Getting started</Nav.Link>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     
    </Form>
      
    </Nav>
    <Button variant="primary" size="lg" active className="buttonsize">
    Sign In 
  </Button>{' '}
  <Button variant="secondary" size="lg" active className="buttonsize">
    Sign Up
  </Button>
  </Navbar.Collapse>
</Navbar>
      </div>
      
<div className="comm">
  <div className="chtarlowl">
    <h1>Join Our Coummunity</h1>
    <p>Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so let's keep it clean here and make it a place to learn from each other!</p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Badge_js-strict.svg/739px-Badge_js-strict.svg.png" className="jslogo"></img>
  </div>
  <div className="frs"><Form className="FormStl">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form></div>
  </div>
  
</div>

   
  );
}

export default App;
