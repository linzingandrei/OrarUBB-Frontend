import { PublicClientApplication } from "@azure/msal-browser";


export const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
        authority: import.meta.env.VITE_MSAL_AUTHORITY,
        redirectUri: import.meta.env.VITE_REDIRECT_URL,
    },
    cache: {
        cacheLocation: "localStorage", // Can also be "sessionStorage"
        storeAuthStateInCookie: true,
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);
