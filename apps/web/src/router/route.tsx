import { App } from "@/App"
import LayoutHomePage from "@/layouts/layoutHome"
import { createBrowserRouter } from "react-router-dom"
export const route = createBrowserRouter([
    {
        path: "/",
        Component: LayoutHomePage,
        children : [
            { index : true, Component : App}
        ]
    }
])

