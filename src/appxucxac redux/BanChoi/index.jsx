import React, { Component } from "react";
import {connect} from "react-redux";
import XucXac from "../XucXac";
import { xuLyBanChonAction } from "../../../src/redux/actions/xucXacAction";
class BanChoi extends Component {
  
  xuLyTaiXiu = (val) => {
    // console.log(val);
    // this.props.xuLyBanChon(val);
    const {xuLyBanChon} = this.props;
    xuLyBanChon(val);
  };
  renderKetQuaXucXac = () => {
    const { ketQuaXucXac } = this.props;
    // render Kết quả nhảy số ngẫu nhiên
    // ?: la hoi ket qua xuc xac co thuoc tinh map hay khong; if co: thuc hien; khong: khong lam gi
    return ketQuaXucXac?.map((xucxac, index) => {
      return (
        <XucXac xucxac={xucxac} key={index}/>
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

const mapStateToProps = (state) => {
  return {  
    ketQuaXucXac: state.xucxacReducer.ketQuaXucXac,
  };
}

// mapDispatchToDrops: truyen tu components - store()
const mapDispatchToDrops = (dispatch) => {
  return {
    // key la props cua component : value la phuong thuc gui data len store
    xuLyBanChon : (taiOrXiu) => {
      // const actions = xuLyBanChonAction(taiOrXiu);
      dispatch(xuLyBanChonAction(taiOrXiu));
    }
  };
};
export default connect (mapStateToProps, mapDispatchToDrops)(BanChoi);


