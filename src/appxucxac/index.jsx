import React, { Component } from "react";
import BanChoi from "./BanChoi";
import BtnChoi from "./btnChoi";
import KetQua from "./KetQua";
import "./style.css";

// Tiện ích: randomNumber()
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class AppXucXac extends Component {
  // 6 mặt xúc xắc
  xucXacMau = [
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 2,
      hinhAnh: "./img/gameXucXac/2.png",
      soDiem: 2,
    },
    {
      ma: 3,
      hinhAnh: "./img/gameXucXac/3.png",
      soDiem: 3,
    },
    {
      ma: 4,
      hinhAnh: "./img/gameXucXac/4.png",
      soDiem: 4,
    },
    {
      ma: 5,
      hinhAnh: "./img/gameXucXac/5.png",
      soDiem: 5,
    },
    {
      ma: 6,
      hinhAnh: "./img/gameXucXac/6.png",
      soDiem: 6,
    },
  ];
  state = {
    // true = tài
    banChon: true,
    tongSoBanChoi: 0,
    soBanThang: 0,
    ketQuaXucXac: [
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
    ],
  };

  // state ở đâu thì setState thì phải ở component đó
  xuLyBanChon = (banChon) => {
    this.setState({
      // banChon: banChon
      banChon,
    });
  };

  xuLyKetQua = () => {
    // const random = getRandomInt(6); // 0-5
    const newKetQuaXucXac = [
      this.xucXacMau[getRandomInt(6)],
      this.xucXacMau[getRandomInt(6)],
      this.xucXacMau[getRandomInt(6)],
    ];
    console.log(newKetQuaXucXac);
    // reduce: tính tổng điểm
    const tongDiem = newKetQuaXucXac.reduce((tong, xucxac) => {
      return (tong += xucxac.soDiem);
    }, 0);
    // xét kết quả = tài || xỉu
    let taiXiu;
    if (tongDiem >= 3 && tongDiem <= 10) {
      taiXiu = false;
    } else {
      taiXiu = true;
    }

    // Xét taiXiu === this.state.banChon
    let { tongSoBanChoi, soBanThang } = this.state;
    if (taiXiu === this.state.banChon) {
      soBanThang += 1;
    }
    tongSoBanChoi += 1;
    this.setState({
      ketQuaXucXac: newKetQuaXucXac,
      soBanThang,
      tongSoBanChoi,
    });
  };

  choiGame = () => {
    // sau 100ms thi chay lai ham
    let i = 0;
    const counting = setInterval(() => {
      const newKetQuaXucXac = [
        this.xucXacMau[getRandomInt(6)],
        this.xucXacMau[getRandomInt(6)],
        this.xucXacMau[getRandomInt(6)],
      ];

      this.setState({
        ketQuaXucXac: newKetQuaXucXac,
      });

      // stop condi
      i += 1;
      if (i > 9) {
        // stop setinterval
        clearInterval(counting);
        // xuLyKetQua()
        this.xuLyKetQua();
      }
    }, 100);
  };

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
          xuLyBanChon={this.xuLyBanChon}
          ketQuaXucXac={this.state.ketQuaXucXac}
        />
        <div className="container text-center display-4">
          <KetQua
            banChon={this.state.banChon}
            tongSoBanChoi={this.state.tongSoBanChoi}
            soBanThang={this.state.soBanThang}
          />
          <BtnChoi xuLyKetQua={this.xuLyKetQua} choiGame={this.choiGame}/>
        </div>
      </div>
    );
  }
}
