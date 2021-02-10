import React, { Component } from "react";
import Glass from "../glass";


export default class GlassList extends Component {
  renderGlasses = () => {
    const { glassesList, handleGlassSelector } = this.props;
    return glassesList.map((glass, index) => {
      return (
        <div className="col-3" key={index}>
          <Glass glass={glass} handleGlassSelector={handleGlassSelector} />
        </div>
      );
    });
  };

  render() {
    return (
      <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
        {this.renderGlasses()}
      </section>
    );
  }
}
