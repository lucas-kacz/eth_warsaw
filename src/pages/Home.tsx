import { useState } from "react";
import RPC from "../utils/ethersRPC";

interface RouterProps {
    web3auth: any;
}

const Home = ({ web3auth }: RouterProps) => {

    const [user, setUser] = useState<any>(null);
    const [address, setAddress] = useState<any>(null);

    const getUserInfo = async () => {
        if (!web3auth) {
        return("web3auth not initialized yet");
        }
        const user = await web3auth.getUserInfo();
        setUser(user);
        return(user);
    };

    const getAccounts = async () => {
        if (!web3auth.provider) {
        return("provider not initialized yet");
        }
        const rpc = new RPC(web3auth.provider);
        const address = await rpc.getAccounts();
        setAddress(address);
        return(address);
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={getUserInfo}>Get User Info</button>
            <button onClick={getAccounts}>Get Accounts</button>
            <p>{user ? JSON.stringify(user) : "No user info"}</p>
            <p>{address ? JSON.stringify(address) : "No address"}</p>
        </div>
    );
}

export default Home;