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
            const user = users.find(item => (item.email === action.payload.email && item.password === action.payload.password));
            if (user) {
                return {
                    ...state,
                    isAuth: true,
                    user: {
                        ...user
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
        case 'REGISTER_REQUEST':
            return {
                ...state,
                isAuth: true,
                user: {
                    ...action.payload
                }
            }
        case 'GET_VIDEO_DATA':
            return {
                ...state,
                playing: state.categories.reduce((videos, category) => videos.concat(category.videos), []).find(video => video.id === Number(action.payload))
            }
        default:
            return state;
    }
};

export default reducer;