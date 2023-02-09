import React from 'react'
import LogoutButton from './LogoutButton'
import WelcomePage from './WelcomePage'

const LoginPage = () => {
  return (
    <div>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand"><WelcomePage/></p>
            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              <LogoutButton/>
             
            </form>
          </div>
        </nav>
        <br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  )
}

export default LoginPage
