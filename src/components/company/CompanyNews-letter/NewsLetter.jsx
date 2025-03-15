import DiscoverFea from "../../solutions/PeoplCounting/DiscoverFea";
import ExploreMore from "./ExploreMore";
import SubscribeNow from "./SubscribeNow";


export default function NewsLetter() {
  return (
    <div>

        <DiscoverFea title="Sign up for Milesight Newsletter" description="Sign up for our periodic newsletter to stay up-to-date with Milesight's new product announcements, events, campaigns, and more." bgimage='/company/Newsletter/news.jpg'/>     
        <SubscribeNow/>
        <ExploreMore/>
           
    </div>
  )
}
