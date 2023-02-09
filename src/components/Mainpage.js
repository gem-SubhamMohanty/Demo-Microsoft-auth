import React from 'react'
import LoginButton from './LoginButton'

const Mainpage = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <p className="navbar-brand">Welcome To SSO lOGIN</p>
                    <form className="d-flex">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}

                    </form>
                </div>
            </nav>
            <br />
            <br /><br /><br /><br /><br /><br /><br />
            <LoginButton/>
        </div>

    )
}

export default Mainpage
