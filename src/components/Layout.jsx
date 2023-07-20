import React from 'react'
import '../styles/LayoutStyles.css'
import { SidebarMenu } from '../Data/data'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({children }) => {
    const location = useLocation();
  return (
    <div className='main'>
        <div className="layout">
            <div className="sidebar">
                <div className="logo">
                    <h3>Doc APP</h3>
                    <hr />
                </div>
                <div className="menu">
                    {SidebarMenu.map((menu)=>{
                        const isActive = location.pathname === menu.path;
                        return(
                            <>
                            <div className={`menu-item ${isActive && "active"}`}>
                                <l className={menu.name}></l>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="content">
                <div className='header'>Header Content</div>
                <div className="body">{children}</div>
            </div>
        </div>
    </div>
  )
}

export default Layout
