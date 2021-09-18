import { Navbar, Container } from "react-bootstrap";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
        <div>
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Navbar.Brand href="#home">
              &copy; {new Date().getFullYear()} Copyright: Rashikraj Shrestha
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
