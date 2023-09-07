import { Fragment } from "react"

export function Search(){
  return(
    <React.Fragment>
    <span className="material-symbols-outlined">search</span>
    <input type="text" placeholder="Search Mail" />
    </React.Fragment>
  )
}