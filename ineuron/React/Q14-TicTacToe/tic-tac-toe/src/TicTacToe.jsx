import React, { Component } from 'react';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    };
  }

  handleClick(index) {
    if (this.state.board[index] || this.state.winner) {
      return;
    }

    const updatedBoard = [...this.state.board];
    updatedBoard[index] = this.state.currentPlayer;

    this.setState({
      board: updatedBoard,
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    });

    const winner = this.checkWinner(updatedBoard);
    if (winner) {
      this.setState({ winner });
    }
  }

  checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  restartGame() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    });
  }

  render() {
    return (
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {this.state.board.map((cell, index) => (
            <div key={index} className="cell" onClick={() => this.handleClick(index)}>
              {cell}
            </div>
          ))}
        </div>
        {this.state.winner && (
          <div className="winner">
            <h2>Winner: {this.state.winner}</h2>
            <button onClick={() => this.restartGame()}>Restart Game</button>
          </div>
        )}
      </div>
    );
  }
}

export default TicTacToe;
