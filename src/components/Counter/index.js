import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, statusButton: true, value: "" };
    this.handlerInput = this.handlerInput.bind(this);
  }
  addNum = () => {
    this.setState({ count: this.state.count + Number(this.state.value) });
  };
  minusNum = () => {
    this.setState({ count: this.state.count - Number(this.state.value) });
  };
  changeButton = () => {
    this.setState({
      statusbar: (this.state.statusButton = !this.state.statusButton),
    });
  };

  handlerInput = (e) => {
    // this.setState({ value: e.target.value });
    const re = /^[0-9\b]+$/;
    if (e.target.value == "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  };

  render() {
    const { count, statusButton } = this.state;
    return (
      <article>
        <h2>{count}</h2>
        <input
          value={this.state.value}
          onChange={this.handlerInput}
          name="step"
          placeholder="step"
          minlength="1"
          maxlength="1000000"
        />
        <button onClick={statusButton ? this.addNum : this.minusNum}>
          {statusButton ? "Add" : "Minus"}
        </button>
        <button onClick={this.changeButton}>Change</button>
      </article>
    );
  }
}

export default Counter;
