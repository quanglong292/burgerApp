import React, { Component } from "react";

export default class ShowRoomCar extends Component {
    state = {
        carImg: './img/car/products/black-car.jpg',
    }

    handleCarChangeColor = (color) => {
        let carImg ='';
        switch (color) {
            case 'black':
                    carImg = './img/car/products/black-car.jpg';
                break;
            case 'red':
                    carImg = './img/car/products/red-car.jpg';
                break;
            case 'silver':
                    carImg = './img/car/products/silver-car.jpg';
                break;
            default:
                    carImg = './img/car/products/steel-car.jpg';
                break;
        }
        this.setState({
            carImg,
        });
    };
  render() {
    return (
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button className="btn" onClick={() => this.handleCarChangeColor('black')}>
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick={() => this.handleCarChangeColor('red')}>
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick={() => this.handleCarChangeColor('silver')}>
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick={() => this.handleCarChangeColor()}>
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>

            <div className="car mt-2">
              <img
                className="img-thumbnail"
                src={this.state.carImg}
                alt="hinh"
              />
            </div>
            
          </div>
        </section>
      </div>
    );
  }
}
