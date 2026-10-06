import { createRoot } from "react-dom/client"
import "@workspace/ui/globals.css"
import { RouterProvider } from "react-router-dom";
import { route } from "./router/route";
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={route} />
)
