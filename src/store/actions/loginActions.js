import { loginConstant } from "../constants/loginConstants"
import springAPI from "./../../services/springboot"

export const login = (email, password) => async dispatch => {
    try {
        dispatch({
            type: loginConstant.LOGIN_EMAIL
        })
        const response = await springAPI.post('login', { email, password })
    } catch (err) {
        dispatch({ 
            type: loginConstant.LOGIN_EMAIL_FAIL,
            payload: { message: err.response.data.status_message }
        })

    }
}