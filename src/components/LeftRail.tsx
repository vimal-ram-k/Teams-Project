
import DownArrowIcon from '../assets/SVGs/LeftRail-SVGs/down-arrow-icon.svg';
import SortIcons from '../assets/SVGs/LeftRail-SVGs/sort-Iconbutton.svg';
import SettingIcon from '../assets/SVGs/LeftRail-SVGs/setting-Iconbutton.svg';
import { ActiveFeedChannelTab } from './ActiveFeedChannelTab';


export const LeftRail = () =>{
    return(

        <div className=' border' style={{ height :"100dvh"}}>
        <header className=' d-flex justify-content-between px-3 align-items-center border' style={{ width :"320px" , height : "60px"}}>
           <section className=' d-flex align-items-center'>
           <small className=' fw-bold'>Feed</small>
           <img src={DownArrowIcon} alt="" />
           </section>
           <section>
            <img src={SortIcons} alt="" />
            <img src={SettingIcon} alt="" />
           </section>
        </header>

     <ActiveFeedChannelTab />

        </div>
    )
}