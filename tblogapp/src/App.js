  import { Container, Nav, Navbar } from 'react-bootstrap';
  import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
  import './App.css';
  import AllPosts from './components/AllPosts';
  import Counter from './components/Counter'
  import PostDetail from './components/PostDetail';
  import Welcome from './components/Welcome';
  
  function App() {
    

    return (
      <BrowserRouter>
  <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React App with Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Posts</Nav.Link>
              <Nav.Link as={Link} to="/welcome">Welcome</Nav.Link>
              <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
          <Routes>
            <Route path='/' element={<AllPosts/>} />
            <Route path='/welcome' element={<Welcome/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/post/:id' element={<PostDetail/>} />
            </Routes>    
      </BrowserRouter>
    );
  }

  export default App;
