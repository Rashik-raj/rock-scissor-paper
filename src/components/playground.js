import { Component } from "react";
import { Row } from "react-bootstrap";

import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

class Playground extends Component {
  render() {
    return (
      <div className="container-fluid bg-secondary" style={{ minHeight: '680px' }}>
        <div className="container pt-3 text-center">
          <Row>
            <div className="col col-6 bg-success my-auto" style={{ minHeight: '600px'}}>
                <h3>You</h3>
                <div className="pt-5">
                    <FaHandPaper style={{ fontSize: '20em', color: 'burlywood' }}/>
                    <FaHandRock style={{ fontSize: '20em', color: 'burlywood' }}/>
                    <FaHandScissors style={{ fontSize: '20em', color: 'burlywood' }}/>
                </div>
            </div>
            <div className="col col-6 bg-warning my-auto" style={{ minHeight: '600px'}}>
                <h3>CPU</h3>
                <div className="pt-5">
                    <FaHandPaper style={{ fontSize: '20em', color: 'rebeccapurple' }}/>
                    <FaHandRock style={{ fontSize: '20em', color: 'rebeccapurple' }}/>
                    <FaHandScissors style={{ fontSize: '20em', color: 'rebeccapurple' }}/>
                </div>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Playground;
