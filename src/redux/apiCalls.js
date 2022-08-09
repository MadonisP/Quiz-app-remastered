import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/users/login", user);
        console.log("apiCalls suc")
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const logoutD = (dispatch) => {
    try{
        dispatch(logout());
    }catch{
        console.log("apicall err")
    }
}