let img = document.querySelector("#book_img")
let title = document.querySelector("#booktitle")
let desc = document.querySelector("#longDed")
let btn = document.querySelector("#btn")



let bookId = window.localStorage.getItem("bookId")
bookId = +bookId
console.log(bookId);
async function render() {
    let books = await request('/products')
    books = books.products
    let book = books.find(el => el.product_id == bookId)
    console.log(book);

    img.src = backendApi + '/' + book.product_img
    title.innerHTML = book.product_name
    desc.innerHTML = book.long_description
    btn.setAttribute("href", `${backendApi + '/download/books/' + book.product_files_name}`)
}

render()