import { emailService } from "../../../services/email.service"
const { useState, useEffect, useRef } = React

export function MailDetails({ mailId, onBack, onDelete,onReply,onForward }) {
    console.log(' i enter to mailDetails')

    const [email, setEmail] = useState(null)

    useEffect(() => {
        emailService.get(mailId).then(setEmail)
    }, [])

    if (!email) return <div>Loading...</div>
    return (
        <section className="email-details">
            <h2>{email.subject}</h2>
            <h4>{email.subject}</h4>
            <h4>{email.body}</h4>
            <button onClick={onReply}> ← Reply</button>
            <button onClick={onForward}> Forward → </button>
        </section>
    )
}