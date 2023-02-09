import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react"; //Hook
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react"; // This basically lets gateway to every component that 
import { useEffect } from 'react';
import LoginPage from './components/LoginPage'
import LoginButton from './components/LoginButton';
import Mainpage from './components/Mainpage';

function App({ msalInstance }) {
   
  return (
    <MsalProvider instance={msalInstance}>
      <LogPage />
    </MsalProvider>
  );
}

const LogPage = () => {
  const IsAuthenticated = useIsAuthenticated()
  return (
    <>
      { IsAuthenticated ?
       <AuthenticatedTemplate>
          <LoginPage />
        </AuthenticatedTemplate>:
        <UnauthenticatedTemplate>
          <Mainpage/>
          <h5 style={{ textAlign: 'center' }}>PLEASE SIGN IN TO NAVIGATE TO LOGIN PAGE</h5>
        </UnauthenticatedTemplate> 
       
      }
     
    

    </>
  )
}

export default App;
