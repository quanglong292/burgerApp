import React, { Component } from "react";

export default class BtnChoi extends Component {
    // xuLyChoiGame = () => {
    //     // nhận lại props
    //     const {xuLyKetQua} = this.props;
    //     // gọi xử lý
    //     xuLyKetQua();
    // }
  render() {
      const {xuLyKetQua, choiGame} = this.props;
      // xuLyKetQua()
 
    return (
        <button className="btn btn-success" style={{ fontSize: 30 }} onClick={() => {choiGame()}} >
          PLAY GAME
        </button>
    );
  }
}
