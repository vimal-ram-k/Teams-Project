
import SingleDot from '../assets/SVGs/LeftRail-SVGs/single-dot.svg';
import chathistory from '../model/chat.json';

export const ActiveFeedChannelTab = () => {


    return (
        <ul className=' bg-white-50 overflow-y-scroll' style={{ scrollbarWidth : "none"}}>
            {
                chathistory.map(item =>{
                    return(
                        <li className={`${item.unseen ? "unseen-message" :""}`}>
                        <div className='   d-flex border-0 gap-2 p-2' style={{ width: "320px", height: "76px" }}>
                            <section className=' d-flex gap-2'>
                                 <img src={SingleDot} alt="" width={4} className={`${item.unseen ? "" :"opacity-0"} `} />
                                <img src={item.profile} alt="" width={32} />
                            </section>
                            <div className='' style={{ width: "236px", height: "52px" }}>
                                <header className=' d-flex justify-content-between align-items-center'>
                                    <h6 className='m-0' style={{ fontSize: "0.8rem" }}><span className=' text-danger'>@</span>{item['chat-header']}</h6>
                                    <h6 className='m-1 fw-light' style={{ fontSize: "0.8rem" }}>{item.time}</h6>
                                </header>
                                <h6 className='m-1 fw-light' style={{ fontSize: "0.7rem" }}>{item['chat-sub-header']}</h6>
                                <h6 className='m-1 fw-light' style={{ fontSize: "0.65rem" }}>{item.message}</h6>
                            </div>
                        </div>
                    </li>
                    )
                })
            }
           
        </ul>
    )
}