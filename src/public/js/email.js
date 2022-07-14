olmachaa.onclick = async event => {
    event.preventDefault()

    console.log(1);

    let user_name = namename.value
    let user_email = gmailgmail.value
    let user_message = mes.value
        // let user_password = pass.value

    // console.log(user_email, user_message, user_name);


    if (!(user_name ||
            user_email ||
            user_message)) {
        // errorMessage.style.color = "red"
        // return errorMessage.textContent = 'All fields must be compeleted!'
    }

    let response = await request('/sendEmail', 'POST', {
        user_name,
        user_email,
        user_message,
        // user_password
    })
    console.log(response);
    // errorMessage.style.color = "green"
    // errorMessage.textContent = response.message
}