import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
const Nav = () => {
    let token = sessionStorage.getItem("token")
    let role = sessionStorage.getItem("role")
  return (
    <>
    <nav>
        <div className='logo'>
            <img src="https://img1.wsimg.com/isteam/ip/e2a365f6-3ee8-45e5-8c2b-461d3909aba6/full_square_transparent_base-0002.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95" alt="qugates" />
        </div>
        <div className='menu'>
        <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        {token ?
                            <Link onClick={() => {
                                window.sessionStorage.clear()
                                window.location.assign("/login")
                            }}>Logout</Link>
                            :
                            <Link to={"/hiring"}>Hiring</Link>
                        }
                    </li>
                    <li>
                        {token ? <></> : <Link to={"/profile"}>Profile</Link>}
                    </li>
                </ul>
        </div>
    </nav>

    </>
  )
}

export default Nav
