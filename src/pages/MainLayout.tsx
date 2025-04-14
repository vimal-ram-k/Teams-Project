import { Outlet } from "react-router-dom"
import { AppBar } from "../components/AppBar"
import { TitleBar } from "../components/TitleBar"

export const MainLayout = () =>{

    return(
        <>
        <TitleBar />
       <div className=" d-flex">
        <AppBar />
        <Outlet />
       </div>
        </>
    )
}