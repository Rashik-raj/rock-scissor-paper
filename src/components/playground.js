import { Component } from "react";
import { Row, Button } from "react-bootstrap";

import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

const playerIconObject = {
  1: <FaHandRock style={{ fontSize: '20em', color: 'burlywood' }}/>,
  2: <FaHandPaper style={{ fontSize: '20em', color: 'burlywood' }}/>,
  3: <FaHandScissors style={{ fontSize: '20em', color: 'burlywood' }}/>
};

const cpuIconObject = {
  1: <FaHandRock style={{ fontSize: '20em', color: 'mediumslateblue' }}/>,
  2: <FaHandPaper style={{ fontSize: '20em', color: 'mediumslateblue' }}/>,
  3: <FaHandScissors style={{ fontSize: '20em', color: 'mediumslateblue' }}/>
};

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      cpu: 3,
      playerIcon: playerIconObject[1],
      cpuIcon: cpuIconObject[3],
      message: null
    }
    this.updateIcon = this.updateIcon.bind(this);
  }

  updateIcon() {
    this.player = Math.floor(Math.random() * (4 - 1)) + 1;
    this.cpu = Math.floor(Math.random() * (4 - 1)) + 1;
    this.playerIcon = playerIconObject[this.player]
    this.cpuIcon = cpuIconObject[this.cpu]
    this.setState({
      player: this.player,
      cpu: this.cpu,
      playerIcon: this.playerIcon,
      cpuIcon: this.cpuIcon
    });

    // check winner
    if (this.player === this.cpu){
      this.setState({message: 'Tie'})
    }
    else if ((this.player + this.cpu) % 2 === 0){
      if (this.cpu < this.player){
        this.setState({message: 'You Lose'})
      }
      else{
        this.setState({message: 'You Win'})
      }
    }
    else {
      if (this.cpu > this.player){
        this.setState({message: 'You Lose'})
      }
      else{
        this.setState({message: 'You Win'})
      }
    }
  }
  render() {
    return (
      <div className="container-fluid bg-secondary" style={{ minHeight: '680px' }}>
        <div className="container pt-3 text-center">
          <Row>
            <div>
              <div className="row">
                <div className="col col-6 bg-success my-auto" style={{ minHeight: '600px'}}>
                    <h3>You</h3>
                    <div className="pt-5">
                      { this.state.playerIcon }
                    </div>
                </div>
                <div className="col col-6 bg-warning my-auto" style={{ minHeight: '600px'}}>
                    <h3>CPU</h3>
                    <div className="pt-5">
                    { this.state.cpuIcon }
                    </div>
                </div>
              </div>
              <div className="col col-12" style={{ position: 'relative', top: '-300px', zIndex: '1'}}>
                <Button variant="primary" size="lg" onClick={this.updateIcon}>Play</Button>
                <p style={{ fontSize: '2em', color: 'white'}}>{ this.state.message }</p>
              </div>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Playground;
