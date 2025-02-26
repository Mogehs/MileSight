import AdvancedIndoor from "./AdvancedIndoor";
import Bouncing from "./Bouncing";
import Indoor from "./Indoor";
import Occupant from "./Occupant";
import PromotingEne from "./PromotingEne";
import Sensing from "./Sensing";
import WhatIAQ from "./WhatIAQ";

export default function IaqAdvanced() {
  return (
    <div>
        <AdvancedIndoor/>
        <WhatIAQ/>
        <Indoor/>
        <Bouncing/>
        <Occupant/>
        <PromotingEne/>
        <Sensing/>
    </div>
  )
}
