import express from "express"
import path from "path"
import cors from "cors"

const PORT = process.env.PORT || 2002

const app = express()

app.use(cors({ origin: "*" }))
app.use(express.static(path.join(process.cwd(), "src", "public")))

app.get("/", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "index.html")))
app.get("/blog", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "blog.html")))
app.get("/about", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "about.html")))
app.get("/login", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "login.html")))
app.get("/contact", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "contact.html")))
app.get("/register", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "register.html")))
app.get("/categories", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "categories.html")))
app.get("/about_product", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "single_product.html")))

app.get("/admin", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "admin.html")))
app.get("/shop", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "shop.html")))
app.get("/addCategory", (req, res) => res.sendFile(path.join(process.cwd(), "src", "views", "addCategory.html")))


app.listen(PORT, () => console.log("🚀Client server is running at http://localhost:" + PORT))