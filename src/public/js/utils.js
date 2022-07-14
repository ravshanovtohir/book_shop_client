const backendApi = "https://book-shop-com.herokuapp.com"

async function request_1(path, method = 'GET', body, option) {
    let response
    if (option !== 'formdata') {
        response = await fetch(backendApi + path, {
            method,
            headers: {
                'Content-Type': 'application/json',
                token: window.localStorage.getItem('token')
            },
            body: JSON.stringify(body) || null
        })
    }

    if (option === 'formdata') {
        const formData = new FormData()
        for (let key in body) {
            formData.append(key, body[key])
        }

        response = await fetch(backendApi + path, {
            method,
            headers: {
                token: window.localStorage.getItem('token')
            },
            body: formData
        })
    }

    if (response.status === 403) {
        window.localStorage.clear()
        window.location = '/login.html'
    }

    response = await response.json()

    return response
}

async function request(route, method, body) {
    let headers = {
        token: window.localStorage.getItem('token')
    }

    if (!(body instanceof FormData)) {
        headers['Content-Type'] = 'application/json'
    }

    let response = await fetch(backendApi + route, {
        method,
        headers,
        body: (body instanceof FormData) ? body : JSON.stringify(body)
    })

    if ([400, 404, 413, 415].includes(response.status)) {
        response = await response.json()

        if (errorMessage) {
            return errorMessage.textContent = response.message
        }

        return alert(response.message)
    }

    return await response.json()
}


async function req(route, method, body) {

    let response = await fetch(backendApi + route, {
        headers: {
            'Content-Type': 'application/json'
        },
        method,
        body: (body instanceof FormData) ? body : JSON.stringify(body)
    })

    if (!(response.status === 200 || response.status === 201)) {
        response = await response.json()
        errorMessage.textContent = response.message
        errorMessage.style.color = "red"
        throw new Error(response.message)
    }

    return await response.json()
}