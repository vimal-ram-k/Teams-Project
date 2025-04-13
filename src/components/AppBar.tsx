import Tab from '../assets/SVGs/AppBar-SVGs/Tab.svg';
import Tab1 from '../assets/SVGs/AppBar-SVGs/Tab-1.svg';
import Tab2 from '../assets/SVGs/AppBar-SVGs/Tab-2.svg';
import Tab3 from '../assets/SVGs/AppBar-SVGs/Tab-3.svg';
import Tab4 from '../assets/SVGs/AppBar-SVGs/Tab-4.svg';
import Tab5 from '../assets/SVGs/AppBar-SVGs/Tab-5.svg';
import Tab6 from '../assets/SVGs/AppBar-SVGs/Tab-6.svg';
import Tab7 from '../assets/SVGs/AppBar-SVGs/Tab-7.svg';
import Tab8 from '../assets/SVGs/AppBar-SVGs/Tab-8.svg';
import { Link } from 'react-router-dom';
import SelectedBar from '../assets/SVGs/AppBar-SVGs/Selected-bar.svg';
import React, { useState } from 'react';


export const AppBar = () => {

    const appbaritems = [
        {
            name: "activity",
            icon: Tab,
            path: "/",
        },
        {
            name: "chat",
            icon: Tab1,
            path: "/",
        }, {
            name: "teams",
            icon: Tab2,
            path: "/",
        }
        , {
            name: "calender",
            icon: Tab3,
            path: "/",
        }, {
            name: "calls",
            icon: Tab4,
            path: "/",
        }, {
            name: "files",
            icon: Tab5,
            path: "/",
        }, {
            name: "contos",
            icon: Tab6,
            path: "/",
        }, {
            name: "menu",
            icon: Tab7,
            path: "/",
        }
        , {
            name: "addApps",
            icon: Tab8,
            path: "/",
        }
    ]

    const [currentTab, setCurrentTab] = useState(appbaritems[0].name);

    const handleSwitchTabs = (e : React.MouseEvent<HTMLLIElement>) => {
        setCurrentTab(e.currentTarget.id)
    }


    return (
        <ul className='' style={{ backgroundColor: "#E6ECF3", height: "100dvh" }}>

            {
                appbaritems.map((item, index) => {
                    return (
                        <li  id={item.name} className="appbar-item"  onClick={handleSwitchTabs}><Link to={`/${item.name}`} className=' d-flex align-items-center justify-content-between'>
                            {
                                item.name === currentTab &&
                                <img src={SelectedBar} alt="" className='' />

                            }            <img src={item.icon} alt="" className=' mx-auto d-block' />
                        </Link></li>
                    )
                })
            }

        </ul>
    )
}