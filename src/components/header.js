import {Navbar, Container} from "react-bootstrap";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              Rock Scissor Paper
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
