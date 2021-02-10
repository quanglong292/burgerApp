import React, { Component } from "react";

export default class Glass extends Component {
    handleClick = () => {
        const {glass, handleGlassSelector} = this.props;
        handleGlassSelector(glass);
    }
  render() {
      const {glass} = this.props;
    return (
      <button className="btn btn-outline-secondary" onClick={this.handleClick}>
        <img
          src={glass.url}
          alt="hinh"
          style={{ width: 100, borderRadius: 20 }}
        />
      </button>
    );
  }
}
