import React from 'react'
//Layout file that accepts children, with a type of ReactNode and renders main, flagging that we will have our main data here(?)
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="auth" >{children}</main>
  )
}

export default Layout