import { PublicClientApplication } from "@azure/msal-browser";

console.log(import.meta.env);

export const msalConfig = {
    auth: {
        // clientId:  import.meta.env.MSAL_CLIENT_ID,
        // authority: import.meta.env.MSAL_AUTHORITY,
        clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
        authority: import.meta.env.VITE_MSAL_AUTHORITY,
        redirectUri: "http://localhost:5173",
    },
    cache: {
        cacheLocation: "localStorage", // Can also be "sessionStorage"
        storeAuthStateInCookie: true,
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);
