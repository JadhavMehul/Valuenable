import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, USER_ERROR, USER_LOGOUT, USER_REQUEST, USER_SUCCESS } from "../Constants/Constants";

export const registerUser = (firstName, lastName, email, phone, password, gender) => async (dispatch) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
        payload: {
            firstName, 
            lastName, 
            email, 
            phone, 
            password,  
            gender
        }
    })
    try {
        const { data } = await Axios.post("/api/registerUser", {
            firstName, 
            lastName, 
            email, 
            phone, 
            password, 
            gender
        });
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.message })
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    dispatch({
        type: LOGIN_USER_REQUEST,
        payload: {
            email, 
            password
        }
    })
    try {
        const { data } = await Axios.post("/api/loginUser", {
            email, 
            password
        });
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.message })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    dispatch({ type: USER_LOGOUT })
}

export const userFound = () => async (dispatch) => {
    dispatch({
        type: USER_REQUEST
    })
    try {
        const { data } = await Axios.get("/api/userFound");
        dispatch({type: USER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: USER_ERROR, payload: error.message})
    }
}

export const listMenu = () => async (dispatch) => {
    dispatch({
        type: MENU_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/menu');
        dispatch({type: MENU_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: MENU_LIST_FAIL, payload: error.message})
    }
}

export const addToCart = (food) => async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach(x => {
        if (x.id === food.id) {
            alreadyExists = true;
        }
    });
    if (!alreadyExists) {
        cartItems.push({...food});
    }
    dispatch({
        type: CART_ADD_ITEM,
        payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

export const removeFromCart = (food) => async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice().filter((x) => x.id !== food.id);
    dispatch({type: CART_REMOVE_ITEM, payload: { cartItems }});
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}