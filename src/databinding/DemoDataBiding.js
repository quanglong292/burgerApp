import React, { Component } from 'react'

export default class DemoDataBiding extends Component {
    constructor () {
        // Phương thức khởi tạo tạo bằng keyword function cần phải tạo constructor này
        super(); // Kế thừa lại các properties của Component cần gọi super
        this.hienThiCauNoi = this.hienThiCauNoi.bind(this); // this trong hàm hienThiCauNoi là class DemoDataBinding, this trong hienThiCauNoi không hiểu bind từ đâu
    }
    // // Phương thức C1:
    // hienThiCauNoi = function () {
    //     console.log("Hashagi!");
    //     console.log(this.image);
    // };
    // Phương thức bắt sự kiện C2: Dùng arrow function không cần bind
    hienThiCauNoi = () => {
        console.log("Hashagi!");
        console.log(this.image);
    };
    // Thuộc tính
    image = 'https://sm.ign.com/ign_in/news/g/gamescom-2/gamescom-2018-sekiro-release-date-and-collectors-edition-ann_wyrw.jpg';
    render() {
        // biến của hàm
        const name = 'Sekiro';
        return (
            <div>
                <h2>Data binding</h2>
                <p>Name: {name}</p>
                <img src={this.image} alt="hinh-demo" width="300px"/>
                <br />
                <button class="btn btn-success" onClick={this.hienThiCauNoi}>Hiển thị câu nói</button>
            </div>
        );
    }
}
