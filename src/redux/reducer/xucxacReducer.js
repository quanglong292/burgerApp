// import { XU_LY_BAN_CHON } from "../constant/xucXacConstant";
import {XU_LY_BAN_CHON} from '../constant/xucXacConstant'
import {getRandomInt} from '../../utils/random'


const initialState = {
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

const xucXacMau = [
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
const xucxacReducer = (state = initialState, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case XU_LY_BAN_CHON: {
      state.banChon = payLoad;
      // de tao prop moi cho component thi phai tao mot object moi
      return { ...state }; //setState
    }
    case "LAC_XUC_XAC": {
      const newKetQuaXucXac = [
        xucXacMau[getRandomInt(6)],
        xucXacMau[getRandomInt(6)],
        xucXacMau[getRandomInt(6)],
      ];
      state.ketQuaXucXac = newKetQuaXucXac;
      return { ...state };
    }
    case "XU_LY_KET_QUA": {
      let {ketQuaXucXac, banChon,soBanThang,tongSoBanChoi} = state;

      const tongDiem = ketQuaXucXac.reduce((tong, xucxac) => {
        return(tong += xucxac.soDiem);
      }, 0);

      let taiOrXiu;
      if (tongDiem >= 3 && tongDiem <= 10) {
        taiOrXiu = false;
      } else {
        taiOrXiu = true;
      }

      if (taiOrXiu === banChon) {
        soBanThang +=1;
      }
      tongSoBanChoi += 1;
      return {...state,soBanThang,tongSoBanChoi};
    }
    default:
      return { ...state };
  }
};

export default xucxacReducer;
