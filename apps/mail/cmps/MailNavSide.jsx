const { useState, useEffect,useRef } = React
export function MailNavSide() {
    const [isOpen,setIsOpen]= useState(false)
    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <section className={`navSide ${isOpen ? 'open' : ''}`}>
        {/* <button className="hamburger" onClick={toggleMenu}>
            ☰
        </button> */}
        <button>Inbox</button>
        <button>Starred</button>
        <button>Snoozed</button>
        <button>Sent</button>
        <button>Drafts</button>
        <button>More</button>
        <button>Labels</button>
    </section>

    )
}