import React, { Component } from "react";

export default class BanChoi extends Component {
  // const {xuLyBanChon} = this.props;
  xuLyTaiXiu = (val) => {
    // console.log(val);
    this.props.xuLyBanChon(val);
  };
  renderKetQuaXucXac = () => {
    const { ketQuaXucXac } = this.props;
    // render Kết quả nhảy số ngẫu nhiên
    return ketQuaXucXac.map((xucxac, index) => {
      return (
        <img src={xucxac.hinhAnh} key={index}  width={50} height={50} alt="hinh" />
      );
    });
  };
  render() {
    return (
      <div className="row text-center">
        <div className="col-4">
          <button
            className="bg-danger display-4 p-5 text-light"
            onClick={() => {
              this.xuLyTaiXiu(true);
            }}
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderKetQuaXucXac()}
          </div>
        </div>
        <div className="col-4">
          <button
            className="bg-dark display-4 p-5 text-light"
            onClick={() => {
              this.xuLyTaiXiu(false);
            }}
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    );
  }
}
