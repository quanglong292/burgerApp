import {
  ADD_USER,
  EDIT_USER,
  UPDATE_USER,
  SEARCH_KEY_WORD,
} from "../constant/userConstant";

export const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const editUserAction = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const updateUserAction = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const searchAction = (keyword) => {
  return {
    type: SEARCH_KEY_WORD,
    payload: keyword,
  };
};
