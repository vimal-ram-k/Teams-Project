import { AppBar } from "../components/AppBar"
import { LeftRail } from "../components/LeftRail"
import { TitleBar } from "../components/TitleBar"
import { RatingCus } from "../MatrialUI/Rating"


export const ActivityFeed =() =>{


    return(
        <>
        <TitleBar />
       <div className=" d-flex">
        <AppBar />
       <LeftRail />
       <RatingCus />
       </div>
        </>
    )
}