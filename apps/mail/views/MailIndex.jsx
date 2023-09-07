import { MailHeader } from "../cmps/MailHeader.jsx"
import { Logo } from "../cmps/logo.jsx"

const { useState, useEffect, useRef } = React
//  import { MailList} from "./apps/mail/cmps/MailList.jsx"
// import {MailDetails} from "./apps/mail/cmps/MailDetails.jsx"
 import {MailNavSide} from "./apps/mail/cmps/MailNavSide.jsx"
// import {MailPreview} from "./apps/mail/cmps/MailPreview.Jsx"
export function MailIndex() {

    return (
        <section className="mailIndex">
           <MailHeader/>
            
        </section>

    )

}