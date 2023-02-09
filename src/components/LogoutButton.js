import React from 'react'
import { useMsal } from '@azure/msal-react'; //hook
const LogoutButton = () => {
    const { instance } = useMsal();
    const handleSignOut = () => {
        instance.logoutRedirect();
    }
  return (
    <div>
          <button className="btn btn-outline-success" onClick={handleSignOut}>Log Out</button>
    </div>
  )
}

export default LogoutButton
