import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddContacts from "../Pages/AddContacts/AddContacts";
import AllContacts from "../Pages/AllContacts/AllContacts";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addContacts',
                element: <AddContacts></AddContacts>
            },
            {
                path: '/allContacts',
                element: <AllContacts></AllContacts>
            }
        ]
    }
])

export default MainRouter;