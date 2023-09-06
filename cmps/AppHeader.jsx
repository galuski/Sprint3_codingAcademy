import { MailNavSide } from "../apps/mail/cmps/MailNavSide.jsx"
import { Logo } from "../apps/mail/cmps/logo.jsx"

const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
        </Link>
     
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
