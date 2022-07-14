btn.onclick = async event => {
    event.preventDefault()

    const newUser = {
        username: usernameInput.value,
        password: passwordInput.value,
    }

    let response = await req('/register', 'POST', newUser)
    console.log(response);
    let token = await response.token
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('is', response.user.user_is_admin)

    errorMessage.textContent = response.message
    errorMessage.style.color = 'green'

    if (token) {
        setTimeout(() => {
            window.location = "/"
        }, 1000)
    }
}