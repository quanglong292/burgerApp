import {ADD_USER, EDIT_USER, UPDATE_USER, SEARCH_KEY_WORD} from "../constant/userConstant";
// Giá trị khởi tạo
const initialState = {
    userList: [],
    userEdit: {},
    keyWord: "",
}

const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_USER:{
            let {userList} = state;
            // add thêm id cho user
            const user = {...payload, id: Math.random()};
            userList = [...userList, user]; 
            state.userList = userList;
            return {...state};
        };
        case EDIT_USER: {
            // C1:
            return {...state, userEdit: payload};
            // C2:
            // state.userEdit = payload;
            // return {...state};
        };
        case UPDATE_USER: {
            const {userList} = state;
            const newUserList = [...userList];
            const index = newUserList.findIndex((user) => {
                return user.id === payload.id;
            })
            if (index !== -1) {
                newUserList[index] = payload;
                return {...state, userList: newUserList};
            }
        };
        case SEARCH_KEY_WORD: {
            return {...state, keyWord: payload};
        }
        

        default:
            return state;
    }
}

export default userReducer;