export function MailPreview({email}) {
    console.log(' i enter to mail preview')

    return (
     <article>
        <h2>{email.fromUser}</h2>
        <h2>{email.subject}</h2>
        <h2>{email.body}</h2>
        <h2>{email.fromUser}</h2>
     </article>
    )
}