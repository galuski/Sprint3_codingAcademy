const { useState, useEffect } = React
export function Compose(){
    const[isBoxMailOpen,setOpenBoxMail]=useState(false)
    return(
        <button className="composeBtn" onClick={() => setOpenBoxMail(!isBoxMailOpen)}>Compose</button>
    )
}