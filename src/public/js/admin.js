addBook.onclick = async event => {
    event.preventDefault()


    let product_name = title.value
    let product_author = author.value
    let product_price = price.value
    let short_description = short.value
    let long_description = long.value
    let product_category = type.value
    let file = uploadInput.files[0]
    let book = uploadInputBook.files[0]

    if (!(product_name && product_author && product_price && short_description && long_description && product_category && file)) {
        errorMessage.style.color = "red"
        return errorMessage.textContent = 'All fields must be compeleted!'
    }
    console.log(book);

    let response = await request_1('/addproduct', 'POST', {
        product_name,
        product_author,
        product_price,
        short_description,
        long_description,
        product_category,
        file,
        book
    }, 'formdata')

    console.log(response);

    title.value = null
    author.value = null
    price.value = null
    short.value = null
    long.value = null
    type.value = null
    uploadInput.files[0] = null
}

// title
// author
// price
// short
// long
// uploadInput