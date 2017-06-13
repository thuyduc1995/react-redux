
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const userLoginRequest = (user) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            let { id, password } = user

            if (id === 'thuyduc' && password === 'thuyduc123') {
                sessionStorage.user = JSON.stringify(user)
                dispatch(setCurrentUser(user))
                resolve()
            }

            reject('*Authentication Failed.\nUsername: thuyduc\nPassword: thuyduc123')
        })
    }
}