class Board extends React.Component {  
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    /* var board = [];
    for (var i=0; i < 3; i++) {
      var board_row = [];
      for (var j=0; j < 3; j++) {
        const square = {this.renderSquare(i*3+j)};
        board_row.push(square);
      }
      board.push(<div className="board-row">{board_row}</div>);
    }
    return board; */
    return(
      <div>
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
