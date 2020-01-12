import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.renderAaa = this.renderAaa.bind(this);

    this.state = {
      value: null,
      num: 1,
      aaa: [],
    }
  }
  
  renderAaa(){
    const {aaa} = this.state;
    aaa.push(<p id={this.state.num} key={this.state.num}>a</p>)
    this.setState({aaa:this.state.aaa})
    this.setState({num:this.state.num+1})
  }

 render() {
   return (
     <div
      className="square"
      onClick={this.renderAaa}
     >
      {this.state.aaa}
     </div>
   );
 }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{}</div>
          <div>{}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);