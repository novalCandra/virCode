import MoleculesFooter from "@/molecules/moleculesFooter";
import MoleculesNavbar from "@/molecules/moleculesNavbar";
import { Outlet } from "react-router-dom";

export default function LayoutHomePage() {
    return (
        <>
            <MoleculesNavbar />
            <Outlet />
            <MoleculesFooter />
        </>
    )
}
