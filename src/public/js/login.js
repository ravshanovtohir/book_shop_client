let old_token = window.localStorage.getItem("token")
if (old_token) {
    window.location = "/"
}
btnLogin.onclick = async event => {
    event.preventDefault()



    const user = {
        username: usernameInput.value,
        password: passwordInput.value
    }
    console.log(user);

    let response = await request('/login', 'POST', user)
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