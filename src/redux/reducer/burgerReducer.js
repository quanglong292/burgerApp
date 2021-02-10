const initialState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1,
    },
    menu: {
        salad: 10,
        cheese: 10,
        beef: 20,
    },
    total: 40,
}

const BurgerReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return state;
    }
};

export default BurgerReducer;