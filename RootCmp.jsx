const { Route, Routes } = ReactRouterDOM
const { useState, useEffect, useRef } = React
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { emailService } from "./services/email.service.js"
import { Loading } from "./apps/mail/cmps/Loading.jsx"



export function App() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(false)
    }, [])

    return <Router>
        <section className="app">
          
           { isLoading&&<Loading />}
        


            <AppHeader />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                {/* <Route path="/note" element={<NoteIndex />} />  */}
            </Routes>
        </section>
    </Router>
}
