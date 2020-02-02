import React from 'react';
import Button from './Button.jsx';
import View from './View.jsx';
import styled from 'styled-components';

const Interface = styled.div`
  display: flex;
  border: 1px solid black;
  height: 500px;
  width: 400px;
  flex-flow: row wrap;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: '',
      right: '',
      current: 0,
      operator: '',
    }
    this.buttons = ['clear', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  }

  calculate = (ch) => {
    if (ch === 'clear') {
      this.setState({
        left: '',
        right: '',
        current: 0,
        operator: '',
      })
    } else if (Number.isInteger(parseInt(ch)) || ch === '.') {
      if (!this.state.operator) {
        if (ch === '0' && this.state.left === '') {
          return;
        }
        let newLeft = this.state.left + ch;
        this.setState({
          left: newLeft,
          current: newLeft
        })
      } else {
        if (ch === '0' && this.state.right === '') {
          return;
        }
        let newRight = this.state.right + ch;
        this.setState({
          right: newRight,
          current: newRight
        })
      }
    } else if (ch === '=') {
      if (this.state.operator !== '' && this.state.right !== '') {
        if (this.state.operator === '+') {
          let output = Number(this.state.left) + Number(this.state.right);
          this.setState({
            left: output,
            right: '',
            current: output,
            operator: '',
          })
        } else if (this.state.operator === '-') {
          let output = Number(this.state.left) - Number(this.state.right);
          this.setState({
            left: output,
            right: '',
            current: output,
            operator: '',
          })
        } else if (this.state.operator === 'x') {
          let output = Number(this.state.left) * Number(this.state.right);
          this.setState({
            left: output,
            right: '',
            current: output,
            operator: '',
          })
        } else if (this.state.operator === '/') {
          let output = Number(this.state.left) / Number(this.state.right);
          this.setState({
            left: output,
            right: '',
            current: output,
            operator: '',
          })
        }
      }
    } else {
        if (!this.state.operator) {
          this.setState({
            operator: ch,
          })
        }
    }
  }

  render() {
    return (
    <div>
      <View current={this.state.current}/>
      <Interface>
        {this.buttons.map((number, index) => <Button key={index} num={number} click={this.calculate}/>)}
      </Interface>
    </div>
    )
  }
}

export default App;
