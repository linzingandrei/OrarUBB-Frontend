import {msalInstance} from "./authenticationConfig.js";

export const callMsGraph = async (account) => {
    const tokenResponse = await msalInstance.acquireTokenSilent({
        account,
        scopes: ["User.Read"],
    });
    const response = await fetch("https://graph.microsoft.com/v1.0/me", {
        headers: {
            Authorization: `Bearer ${tokenResponse.accessToken}`,
        },
    });
    return response.json();
}