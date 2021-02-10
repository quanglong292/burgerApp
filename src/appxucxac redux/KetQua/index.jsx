import React, { Component } from "react";
import {connect} from "react-redux";

class KetQua extends Component {
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

// Lay state tu store() ve component
// mapStateToProps: store()'s state - component's props
const mapStateToProps = (state) => {
  return {
    //key = component's props : value = store()'s state
    randomName : state,
    banChon : state.xucxacReducer.banChon,
    soBanThang : state.xucxacReducer.soBanThang,
    tongSoBanChoi : state.xucxacReducer.tongSoBanChoi,
  };
}
export default connect(mapStateToProps)(KetQua);