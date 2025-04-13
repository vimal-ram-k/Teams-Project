
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import { ActivityFeed } from "../pages/ActivityFeed"
import { MainLayout } from "../pages/MainLayout"
import { TeamsFeed } from "../pages/TeamsFeed"

export const AppRoutes = () =>{

    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                <Route path="/activity" element={<ActivityFeed />} /> 
                <Route path="/chat" element={<TeamsFeed />} /> 
                <Route path="/teams" element={<TeamsFeed />} /> 
                </Route>
            </Routes>
        </Router>
        
    )
}