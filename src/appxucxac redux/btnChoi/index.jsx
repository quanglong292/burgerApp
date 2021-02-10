import React, { Component } from "react";
import { connect } from "react-redux";

class BtnChoi extends Component {
  xuLyChoiGame = () => {
    // sau 100ms thi chay lai ham
    let i = 0;
    const { lacXucXac, xuLyKetQua} = this.props;
    const counting = setInterval(() => {
      lacXucXac();
      // stop condi
      i += 1;
      if (i > 9) {
        // stop setinterval
        clearInterval(counting);
        // xuLyKetQua()
        xuLyKetQua();
      }
    }, 100);
  };
  render() {
    // const {xuLyKetQua, choiGame} = this.props;
    // const { lacXucXac } = this.props;
    // xuLyKetQua()

    return (
      <button
        className="btn btn-success"
        style={{ fontSize: 30 }}
        onClick={this.xuLyChoiGame}
      >
        {/* onClick={() => {choiGame()}} */}
        PLAY GAME
      </button>
    );
  }
}



// ve nha lam xucXacAction
const mapDispatchToDrops = (dispatch) => {
  return {
    lacXucXac: (xucxac) => {
      const action = {
        type: "LAC_XUC_XAC",
        payload: null,
      };
      dispatch(action);
    },
    xuLyKetQua: (val) => {
      const action = {
        type: "XU_LY_KET_QUA",
        payload: null,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToDrops)(BtnChoi);
