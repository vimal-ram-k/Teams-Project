import Tab from '../assets/SVGs/AppBar-SVGs/Tab.svg';
import Tab1 from '../assets/SVGs/AppBar-SVGs/Tab-1.svg';
import Tab2 from '../assets/SVGs/AppBar-SVGs/Tab-2.svg';
import Tab3 from '../assets/SVGs/AppBar-SVGs/Tab-3.svg';
import Tab4 from '../assets/SVGs/AppBar-SVGs/Tab-4.svg';
import Tab5 from '../assets/SVGs/AppBar-SVGs/Tab-5.svg';
import Tab6 from '../assets/SVGs/AppBar-SVGs/Tab-6.svg';
import Tab7 from '../assets/SVGs/AppBar-SVGs/Tab-7.svg';
import Tab8 from '../assets/SVGs/AppBar-SVGs/Tab-8.svg';




export const AppBar = () =>{

    return(
        <ul className='' style={{backgroundColor :"#E6ECF3"}}>
            <li className="appbar-item"><img src={Tab} alt="" /></li>
            <li className="appbar-item"><img src={Tab1} alt="" /></li>
            <li className="appbar-item"><img src={Tab2} alt="" /></li>
            <li className="appbar-item"><img src={Tab3} alt="" /></li>
            <li className="appbar-item"><img src={Tab4} alt="" /></li>
            <li className="appbar-item"><img src={Tab5} alt="" /></li>
            <li className="appbar-item"><img src={Tab6} alt="" /></li>
            <li className="appbar-item"><img src={Tab7} alt="" /></li>
            <li className="appbar-item"><img src={Tab8} alt="" /></li>
        </ul>
    )
}