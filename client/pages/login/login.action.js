import { browserHistory } from 'react-router'

export const userLoginRequest = (user) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/api/accounts/login', {
                method: 'POST',
                headers: new Headers({
                    'content-type': 'application/json'
                }),
                body: JSON.stringify(user)
            }).then((response) => {
                if (!response.ok) {
                    throw response.statusText
                }

                return response.json()
            }).then((result) => {
                const token = result.token

                sessionStorage.setItem('jwtToken', token)
                resolve(result)
                browserHistory.push('/dashboard')
            }).catch(() => {
                reject(true)
            })
        })
    }
}