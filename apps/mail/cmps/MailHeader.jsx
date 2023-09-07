import { Search } from "../../../cmps/Search.jsx";

export function MailHeader() {
  return (
      <nav className="mail-header">
        <div className="header-left">
        <span className="material-symbols-outlined">
          menu
          </span>
          <img src="apps/imgs/gmail.jpg" alt="gmail icon" />
        </div>

        <div className="header-middle">
        <Search/>

        </div>

        <div className="header-right">


        </div>
      </nav>


  )
}