import React from 'react'
import { useMsal } from "@azure/msal-react"; //Hook
import { useState, useEffect } from "react";
// import { username } from '@azure/msal-browser/dist/packageMetadata';
const WelcomePage = () => {
    const { instance } = useMsal();
    const [username, setUsername] = useState('');
    useEffect(() => {
        const currentAccount = instance.getActiveAccount();
        console.log(currentAccount)
        if (currentAccount) {
            setUsername(currentAccount.name)
        }
    }, [instance])
  return (
    <div>
        <p>Welcome, {username}</p>
    </div>
  )
}

export default WelcomePage
