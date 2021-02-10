import React, { Component } from "react";
import BanChoi from "./BanChoi";
import BtnChoi from "./btnChoi";
import KetQua from "./KetQua";
import "./style.css";

export default class AppXucXac extends Component {
  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
        </div>
        <BanChoi
          // xuLyBanChon={this.xuLyBanChon}
          // ketQuaXucXac={this.state.ketQuaXucXac}
        />
        <div className="container text-center display-4">
          <KetQua
            // banChon={this.state.banChon}
            // tongSoBanChoi={this.state.tongSoBanChoi}
            // soBanThang={this.state.soBanThang}
          />
          <BtnChoi /> 
          {/* xuLyKetQua={this.xuLyKetQua} choiGame={this.choiGame} */}
        </div>
      </div>
    );
  }
}
