import TeamsSVG from '../assets/SVGs/Teams.svg';
import BackwardBtn from '../assets/SVGs/backward-Icon-button.svg';
import ForwardBtn from '../assets/SVGs/forward-Icon-button.png';
import Avatar from '../assets/SVGs/Avatar.svg';
import ThreedotIcon from '../assets/SVGs/three-dot-Icon-button.svg';
import MaximusBtn from '../assets/SVGs/maximus-control-button.svg';
import MinimusBtn from '../assets/SVGs/minimus-control-button.svg';
import CloseBtn from '../assets/SVGs/close-control-button.svg';
import { SearchBar } from './SearchBar';



export const TitleBar = () => {

  return (
    <nav className=' d-flex justify-content-between align-items-center px-4' style={{ height: "48px", backgroundColor: "#E6ECF3" }}>

      {/* LeftBar */}
      <img src={TeamsSVG} alt="" />


      {/* CenterBar  */}

      <section className=' d-flex gap-3'>
        <section className=' d-flex'>
          <img src={BackwardBtn} alt="" />
          <img src={ForwardBtn} alt="" />
        </section>

        <SearchBar />
      </section>

      {/* RightBar */}

      <section className=' d-flex gap-2'>
        <img src={ThreedotIcon} alt="" />
        <img src={Avatar} alt="" />

        <section className=' d-flex'>
          <img src={MinimusBtn} alt="" />
          <img src={MaximusBtn} alt="" />
          <img src={CloseBtn} alt="" />

        </section>
      </section>
    </nav>
  )
}