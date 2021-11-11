import { CART_ADD_ITEM, CART_REMOVE_ITEM, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, USER_ERROR, USER_LOGOUT, USER_REQUEST, USER_SUCCESS } from "../Constants/Constants";

export const registerUser = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {loading: true};
        case REGISTER_USER_SUCCESS:
            return {loading: false, food: action.payload};
        case REGISTER_USER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const loginUser = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {loading: true};
        case LOGIN_USER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case LOGIN_USER_FAIL:
            return {loading: false, error: action.payload};
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}

export const userFound = (state = {}, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {loading: true}
        case USER_SUCCESS:
            return {loading: false, user: action.payload};
        case USER_ERROR:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const menuListReducer = (state = { loading: true, menu: [] }, action) => {
    switch (action.type) {
        case MENU_LIST_REQUEST:
            return {loading: true};
        case MENU_LIST_SUCCESS:
            return {loading: false, menu: action.payload};
        case MENU_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const cartReducer = (state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") }, action) =>{
    switch (action.type) {
        case CART_ADD_ITEM:
            return { cartItems: action.payload.cartItems };

        case CART_REMOVE_ITEM:
            return { cartItems: action.payload.cartItems };
        
        default:
            return state;
    }
} 