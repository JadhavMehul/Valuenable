import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { cartReducer, loginUser, menuListReducer, registerUser, userFound } from "./redux/Reducer/Reducers";

const initialState = {
    userFoundCheck: {
        userInfo: localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")):null,
    }
};
const reducer = combineReducers({
    menuList: menuListReducer,
    registerUser: registerUser,
    loginUser: loginUser,
    userFoundCheck: userFound,
    cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;