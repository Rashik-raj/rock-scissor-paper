import { Component } from "react";
import { Row, Col } from "react-bootstrap";
class Banner extends Component {
  render() {
    return (
      <div className="container-fluid bg-secondary">
        <div className="container pt-3 text-center">
          <Row>
            <Col>
              <h1 className="">Can you win me???</h1>
              <div className="alert alert-secondary text-primary fs-3">
                I bet you can't...
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Banner;
