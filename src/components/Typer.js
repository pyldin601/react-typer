import React, { Component } from 'react';
import './Typer.css';

export default class Typer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: props.text,
      left: '',
      errors: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  onKeyPress({ key }) {
    this.setState(prevState => {
      const current = this.state.right.substr(0, 1);
      const rest = this.state.right.substr(1);

      return current !== key
        ? { errors: prevState.errors + 1 }
        : { left: prevState.left + current, right: rest };
    });
  }

  render() {
    return (
      <div>
        <div className="type-text">
          <span className="left">{this.state.left}</span>
          <span className="right">{this.state.right}</span>
        </div>
        <div className="type-status">
          Errors:
          <b>{this.state.errors}</b>
        </div>
      </div>
    );
  }
}
