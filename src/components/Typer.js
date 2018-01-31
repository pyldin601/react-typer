import React, { Component } from 'react';
import { pack } from '../utils/arrays';
import './Typer.css';

export default class Typer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: props.text,
      left: '',
      types: [],
      errors: 0,
    };
  }

  isDone() {
    return this.state.right.length === 0;
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  onKeyPress({ key }) {
    this.setState(prevState => {
      const current = this.state.right.substr(0, 1);
      const rest = this.state.right.substr(1);

      return current !== key
        ? { 
          errors: prevState.errors + 1
        }
        : {
          left: prevState.left + current,
          right: rest,
          types: [...prevState.types, Date.now()],
        };
    });
  }

  render() {
    if (this.isDone()) {
      return this.renderDone();
    }

    return (
      <div>
        <div className="type-title">
          Type this text:
        </div>
        <pre className="type-text">
          <span className="left">{this.state.left}</span>
          <span className="right">{this.state.right}</span>
        </pre>
        <div className="type-status">
          Errors: <b>{this.state.errors}</b><br />
        </div>
      </div>
    );
  }

  calculateSpeed() {
    const { types } = this.state; 

    if (types.length < 2) {
      return 0;
    }

    const deltas = pack(this.state.types);
    const totalTime = deltas.reduce((prev, curr) => prev + curr);

    return Math.floor(types.length / totalTime * 60000);
  }

  renderDone() {
    const speed = this.calculateSpeed();
    return <div>Done! Your average speed is {speed} CPM.</div>;
  }
}
