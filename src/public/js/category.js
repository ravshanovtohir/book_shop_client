addCategory.onclick = async event => {
    event.preventDefault()

    let category_name = title.value
    category_name.trim()
    if (!category_name) {
        errorMessage.style.color = "red"
        return errorMessage.textContent = 'All fields must be compeleted!'
    }

    let response = await request_1('/addcategory', 'POST', {
        category_name
    })
    errorMessage.style.color = "green"
    errorMessage.textContent = response.message
}