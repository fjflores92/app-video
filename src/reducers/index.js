const users = [
    {
        "id": 1,
        "name": "Francisco Flores",
        "email": "fflores.ic.ipn@gmail.com",
        "password": "123"
    },
    {
        "id": 2,
        "name": "Francisco Flores",
        "email": "fflores.ic.ipn@hotmail.com",
        "password": "123"
    },
    {
        "id": 3,
        "name": "Francisco Flores",
        "email": "contacto@fdjflores.com",
        "password": "123"
    },
    {
        "id": 4,
        "name": "Francisco Flores",
        "email": "fdjflores@braapi.com",
        "password": "123"
    }
];

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
        case 'LOGIN_REQUEST':
            const user = users.filter(item => (item.email === action.payload.email && item.password === action.payload.password));
            if (user && user.length) {
                return {
                    ...state,
                    isAuth: true,
                    user: {
                        ...users.filter
                    }
                }
            } else {
                return {
                    ...state,
                    isAuth: false
                }
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        default:
            return state;
    }
};

export default reducer;