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
      calculation: 0,
      current: 0,
      equation: '',
    }
    this.buttons = ['clear', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  }

  calculate = (ch) => {
    if (ch === 'clear') {
      this.setState({
        calculation: 0,
        current: 0,
        equation: '',
      })
      return;
    }
    if (typeof ch === 'number') {
      this.setState({current: ch});
      return;
    } else {
      
    }
  }

  render() {
    return (
    <div>
      <View current={this.state.current}/>
      <Interface>
        {this.buttons.map((number, index) => <Button key={index} num={number} onClick={() => {this.calculate(number)}}/>)}
      </Interface>
    </div>
    )
  }
}

export default App;
