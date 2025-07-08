import Home from "./pages/Home/Home"
import NewUser from "./pages/newUser/newUser"
import Users from "./pages/users/Users"
import Products from "./pages/products/products"
import Product from "./pages/product/product"
import { element } from "prop-types"

let routes=[
    {path:"/", element:<Home/>},
    {path: "/newUser", element:<NewUser/>},
    {path: "/users", element:<Users/>},
    {path:"/products", element:<Products/>},
    {path:"/product/:productID", element:<Product/>}
]
export default routes