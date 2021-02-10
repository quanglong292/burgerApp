import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  // Bài tập: Tạo nội dung từng phần cho Product
  // dùng props để truyền dât từ productlist sang product
  state = {
    iphone: 'iPhone X features a new all-screen design. Face ID, which makes your face your password',
    android : 'Android là một hệ điều hành dựa trên nền tảng Linux được thiết kế dành cho các thiết bị di động có màn hình cảm ứng như điện thoại thông minh và máy tính bảng. Ban đầu, Android được phát triển bởi Android, Inc. với sự hỗ trợ tài chính từ Google và sau này được chính Google mua lại vào năm 2005',
  }
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product iphone={this.state.iphone} android={this.state.android}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product iphone={this.state.iphone} android={this.state.android}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product iphone={this.state.iphone} android={this.state.android}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product iphone={this.state.iphone} android={this.state.android}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
