import { XU_LY_BAN_CHON } from "../constant/xucXacConstant";

// Action creator
export const xuLyBanChonAction = (taiOrXiu) => {
  return {
    type: XU_LY_BAN_CHON,
    payLoad: taiOrXiu,
  };
};
