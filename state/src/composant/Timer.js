import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
      start: false
    };
    setInterval(() => {
      if (this.state.start)
        this.setState({
          ms: this.state.ms + 1000,
          hh: parseInt(this.state.ms / 3600000),
          mm: parseInt((this.state.ms % 3600000) / 60000),
          ss: parseInt(((this.state.ms % 3600000) % 60000) / 1000)
        });
    }, 1000);
  }

  clicked = () =>
    this.setState({
      start: !this.state.start
    });
  reset = () => {
    this.setState({
      start: false,
      ms: 0,
      ss: 0,
      mm: 0,
      hh: 0
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            {String(this.state.hh).padStart(2, "0")}
          </div>
          <div className="col-sm-1">
            {String(this.state.mm).padStart(2, "0")}
          </div>
          <div className="col-sm-1">
            {String(this.state.ss).padStart(2, "0")}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1">hh</div>
          <div className="col-sm-1">mm</div>
          <div className="col-sm-1">ss</div>
        </div>
        <div className="row">
          <div className="col-sm-1">
            <button className="btn btn-success" onClick={this.clicked}>
              {this.state.start ? "Pause" : "Start"}
            </button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-danger" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Timer;