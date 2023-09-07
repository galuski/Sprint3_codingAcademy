import { MailHeader } from "../cmps/MailHeader.jsx"
import { emailService } from "../../../services/email.service.js"
import { MailDetails } from "../cmps/MailDetails.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { Logo } from "../cmps/logo.jsx"

const { useState, useEffect, useRef } = React
//  import { MailList} from "./apps/mail/cmps/MailList.jsx"
// import {MailDetails} from "./apps/mail/cmps/MailDetails.jsx"
import { MailNavSide } from "./apps/mail/cmps/MailNavSide.jsx"
// import {MailPreview} from "./apps/mail/cmps/MailPreview.Jsx"
export function MailIndex() {
    const [emails, setEmails] = useState(null)
    const [selectedEmailId, setSelectedMailId] = useState(null)


    useEffect(() => {
        emailService.query().then(setEmails)
    }, [])

    function onRemoveEmail(emailId) {
        emailService.remove(emailId)
            .then(() => {
                setEmails(prevEmail => prevEmail.filter(email => email.id !== emailId))
            })
    }

    function onSelectEmailId(emailId) {
        setSelectedMailId(emailId)
    }
    if (!emails) return <div>Loading...</div>
    return (
        <section className="mailIndex">
<<<<<<< HEAD
           <MailHeader/>
            
=======
            <Logo />
            <MailNavSide />
            {!selectedEmailId &&
                <React.Fragment>
                    <MailList emails={emails} onSelectEmailId={onSelectEmailId} />
                </React.Fragment>
            }
            {selectedEmailId && <MailDetails onBack={() => onSelectEmailId(null)} emailId={selectedEmailId} />}
>>>>>>> cb9e8299c1f187530b9509f9a8b6f200de47e218
        </section>

    )

<<<<<<< HEAD
=======






>>>>>>> cb9e8299c1f187530b9509f9a8b6f200de47e218
}