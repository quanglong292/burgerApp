import React, { Component } from "react";

export default class KetQua extends Component {
  render() {
      const {banChon, tongSoBanChoi, soBanThang} = this.props;
      // console.log(banChon);
    return (
        // React.Fragment: thẻ div ảo để wrap JSX đúng cú pháp
      <> 
        <div>
          bạn chọn : <span className="text-danger">{banChon ? "Tài" : "Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi : <span className="text-warning">{tongSoBanChoi}</span>
        </div>
      </>
    );
  }
}
