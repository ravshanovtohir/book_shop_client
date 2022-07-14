let div = document.querySelector("#rowBooks")
let keraksiz = document.querySelector("#keraksiz")
let pagination = document.querySelector(".pagination")
let span_1 = document.createElement("span")
let olim


let pag_page = 1
let limit = 20

function renderPagimation(num) {
    pagination.innerHTML = null
    let li_1 = document.createElement("li")
    li_1.innerHTML = `
    <a  id="orqaga"  aria-label="Previous">
        <span id="orqaga" aria-hidden="true">&laquo;</span>
    </a>
    `

    pagination.append(li_1)



    let li = document.createElement("li")
    li.setAttribute("id", "paginationNum")
    let a = document.createElement("a")
    a.innerHTML = pag_page
    li.append(a)
    pagination.append(li)


    let li_2 = document.createElement("li")
    li_2.innerHTML = `
    <a id="keyingi"  aria-label="Next">
    <span id="keyingi" aria-hidden="true">&raquo;</span>
    </a>
    `
    pagination.append(li_2)

    let oldingi = document.querySelectorAll("#orqaga")
    let keyingi = document.querySelectorAll("#keyingi")



    oldingi[0].onclick = (event) => {
        event.preventDefault()
        if (pag_page > 1) {
            pag_page -= 1
            paginationNum.textContent = pag_page
        }
        renderBooks()
    }

    keyingi[0].onclick = (event) => {
        event.preventDefault()
        pag_page += 1
        paginationNum.textContent = pag_page
        renderBooks()
    }

}




async function renderBooks() {
    let page = pag_page
    keraksiz.innerHTML = null
    div.innerHTML = null
    let olma = 0
    let users = await request('/products')


    let arr = users.products


    arr = arr.slice(page * limit - limit, limit * page)
    let num = Math.ceil(arr.length / limit)
    olim = num

    renderPagimation(num)
    div.innerHTML = null
    for (let i of arr) {
        olma = olma + 1
        let div_2 = document.createElement("div")
        div_2.classList.add("col-md-3")
        div_2.classList.add("col-sm-6")
        div_2.innerHTML = `

        <div class="single-shop-product">
                        <div class="product-upper">
                            <img src="${backendApi + "/" + i.product_img}" style="weight" width="250" height="300" alt="">
                        </div>
                        <h2><a href="">${i.product_author}</a></h2>
                        <h2><a href="">--</a></h2>
                        <h2><a href="">${i.product_name}</a></h2>
                        <div class="product-carousel-price">
                            <ins>${i.short_description}</ins>
                        </div>

                        <div class="product-option-shop">
                            <a id="moree" class="add_to_cart_button" data-quantity="${olma}" data-product_sku="" data-product_id="70" rel="nofollow" href="#">Tab for more</a>
                        </div>
        </div>
        `

        // keraksiz.innerHTML = null
        keraksiz.append(div_2)

        let more = document.querySelector("#moree")

        more.addEventListener('click', () => {
            window.localStorage.setItem('bookId', i.product_id)

            window.location = '/about_product'
        })
        keraksiz.innerHTML = null

        // div.innerHTML = null
        div.append(div_2)

    }

}

renderBooks()

async function pag() {
    renderPagimation(olim)

    let oldingi = document.querySelectorAll("#orqaga")
    let keyingi = document.querySelectorAll("#keyingi")
    let paginationNum = document.querySelector("#paginationNum")
        //pagination da oldingi page ga qaytish


    oldingi.onclick = () => {
        if (pag_page > 1) {
            pag_page -= 1
            paginationNum.textContent = pag_page
        }
        renderBooks()
    }


    // pagination da keyingi page ga o'tish.
    keyingi.addEventListener("click", (event) => {
        event.preventDefault()
        pag_page += 1
        paginationNum.textContent = pag_page
        renderBooks()
    })
}


let search = document.querySelector("#searching")

search.onclick = async(event) => {
    event.preventDefault()
    let books = await request('/products')
    let arr = books.products

    arr = arr.filter(el => el.product_name.toLowerCase() == input.value.toLowerCase())


    for (let i of arr) {
        div.innerHTML = null
        let div_2 = document.createElement("div")
        div_2.classList.add("col-md-3")
        div_2.classList.add("col-sm-6")
        div_2.innerHTML = `

        <div class="single-shop-product">
                        <div class="product-upper">
                            <img src="${backendApi + "/" + i.product_img}" style="weight" width="250" height="300" alt="">
                        </div>
                        <h2><a href="">${i.product_author}</a></h2>
                        <h2><a href="">--</a></h2>
                        <h2><a href="">${i.product_name}</a></h2>
                        <div class="product-carousel-price">
                            <ins>${i.short_description}</ins>
                        </div>

                        <div class="product-option-shop">
                            <a id="moree" class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="#">Tab for more</a>
                        </div>
        </div>
        `

        // keraksiz.innerHTML = null
        keraksiz.append(div_2)

        let more = document.querySelector("#moree")

        more.addEventListener('click', () => {
            window.localStorage.setItem('bookId', i.product_id)
            window.location = '/about_product'
        })
        keraksiz.innerHTML = null

        // div.innerHTML = null
        div.append(div_2)

    }
}