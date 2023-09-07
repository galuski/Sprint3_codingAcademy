import { MailPreview } from "./MailPreview.jsx"
export function MailList({ emails , onSelectEmailId}) {
    console.log(' i enter to mailList')
    return (
        <ul className="email-list">
            {emails.map(email => {
                <li key={ email.id}>
                 <MailPreview email={email} />
                 <section>
                 <button onClick={() => onSelectEmailId(email.id)}></button>
                 </section>
                </li>
            })}
        </ul>
    )
}
