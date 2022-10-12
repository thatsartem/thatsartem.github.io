import {Outlet} from "react-router-dom"

import "../css/content.css"
import Buttons from "./Buttons"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <Header />
            <div className="content">
                <Buttons />
                <Outlet />
            </div>
        </>
    )
}

export default Layout