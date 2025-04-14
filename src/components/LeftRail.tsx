

import { ActiveFeedChannelTab } from './ActiveFeedChannelTab';
import { LeftRailHeader } from './LeftRailHeader';


export const LeftRail = () => {
    return (

        <div className=' border' style={{ height: "100dvh" }}>
            <LeftRailHeader />

            <ActiveFeedChannelTab />

        </div>
    )
}