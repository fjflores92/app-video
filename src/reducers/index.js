const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: (!state.myList.some(item => item.id === action.payload.id)) ? [...state.myList, action.payload] : state.myList
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(item => {
                    return item.id !== action.payload
                })
            }
        default:
            return state;
    }
};

export default reducer;