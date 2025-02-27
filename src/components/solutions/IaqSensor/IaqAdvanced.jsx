import FormSection from "../smart-restroom/FormSection";
import AdvancedIndoor from "./AdvancedIndoor";
import Faq from "./Faq";

import WhatIAQ from "./WhatIAQ";

export default function IaqAdvanced() {
  return (
    <div>
        <AdvancedIndoor/>
        <WhatIAQ/>
        <Faq/>
        <FormSection/>
    </div>
  )
}
