import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "98884263-01af-45d5-8961-b856ec8ba4e3", // Replace with your Azure App's client ID
        authority: "https://login.microsoftonline.com/5a4863ed-40c8-4fd5-8298-fbfdb7f13095", // Replace with your tenant ID
        redirectUri: "http://localhost:5173", // Replace with your app's redirect URI
    },
    cache: {
        cacheLocation: "localStorage", // Can also be "sessionStorage"
        storeAuthStateInCookie: true,
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);
