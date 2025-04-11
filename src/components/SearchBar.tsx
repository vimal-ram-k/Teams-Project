
import SearchIcon from '../assets/SVGs/Search.svg';


export const SearchBar = ()=>{

    return(
        <section className=' search-bar bg-white border border-1 rounded-2 position-relative'  style={{height : "32px" , width : "468px"}}>
        <input type="text" name="" id="" className='z-0 px-3 bg-transparent border-0 w-100 h-100' style={{ outline : "none"}}/>
        <section className=' z-1 searchbar-sub-section position-absolute top-0 d-flex align-items-center h-100 gap-1' style={{ transform : "translateX(10px)"}}>
          <img src={SearchIcon} alt="" />
          <small className=' fw-lighter' style={{ fontSize : "0.8rem"}}>Search</small>
        </section>
       </section>
    )
}