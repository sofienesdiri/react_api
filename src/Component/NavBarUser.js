import { Link } from "react-router-dom"
import { Container, Navbar,Nav } from "react-bootstrap"

const NavBarUser=()=>{
    return(
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">API</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link href="#features"><Link to='/users'>Users</Link> </Nav.Link>
                
            </Nav>
    </Container>
  </Navbar>

        </div>
    )
}
export default NavBarUser