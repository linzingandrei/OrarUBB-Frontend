import {useMsal} from "@azure/msal-react";
import {useEffect, useState} from "react";
import {callMsGraph} from "./graph.jsx";

const UserInfo = () => {
    const { accounts } = useMsal();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (accounts.length > 0) {
            const userAccount = accounts[0];
            callMsGraph(userAccount).then((data) => setUserData(data));
        }
    }, [accounts]);

    return userData ? (
        <div>
            <h3>Welcome, {userData.displayName}</h3>
            <p>Email: {userData.userPrincipalName}</p>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default UserInfo;
