import { AppBar } from "../components/AppBar"
import { LeftRail } from "../components/LeftRail"
import { TitleBar } from "../components/TitleBar"


export const ActivityFeed =() =>{


    return(
        <>
        <TitleBar />
       <div className=" d-flex">
        <AppBar />
       <LeftRail />
       </div>
        </>
    )
}