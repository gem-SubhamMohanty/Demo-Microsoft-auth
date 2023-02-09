import React from 'react'
import { useMsal } from '@azure/msal-react'; //react Hook
const LoginButton = () => {
    const { instance } = useMsal(); // access to app instance. And get api from msal
    const handleSignIn = () => {
        instance.loginRedirect({
            scopes: ['user.read']
        }) // api will redirect browser to azure AD and prompt the user to sign in with their uername and password
    }
  return (
    <div>
          <button className="btn btn-outline-success" onClick={handleSignIn}>Login</button>
    </div>
  )
}

export default LoginButton
