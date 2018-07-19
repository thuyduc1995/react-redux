
export const interactWithServer = (url, method, data) => {
    const request = {}

    request.headers = { 'Content-Type': 'application/json' }
    request.method = method
    if (data) {
        request.body = JSON.stringify(data)
    }

    return new Promise((success, reject) => {
        fetch(
            url,
            request
        ).then((response) => {
            if (!response.ok) {
                throw Error(response.status)
            }

            return response.json()
        }).then((result) => {
            success(result)
        }).catch((error) => {
            reject(error)
        })
    })
}
