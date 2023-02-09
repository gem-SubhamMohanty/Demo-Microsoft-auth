import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EventType, PublicClientApplication } from "@azure/msal-browser";
const pca = new PublicClientApplication({
  auth: {
    clientId: '2b168d96-e699-449e-9b81-705aa686885f',
    authority: 'https://login.microsoftonline.com/322e72b4-4ff2-4fb2-b0df-20c89e00c32a',
    redirectUri: '/',
    postLogoutRedirectUri: '/',
    clientCapabilities: ['CP1']
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPII) => {
        // console.log(message)
      },
      logLevel: "Info",
    }
  }
});
pca.addEventCallback(event => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    console.log(event);
    pca.setActiveAccount(event.payload.account)
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App msalInstance={pca}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
