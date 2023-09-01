import { useEffect, useState } from "react";
import RPC from "../utils/ethersRPC"
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
interface RouterProps {
    web3auth: any;
}

const Request = ({ web3auth }: RouterProps) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [privateKey, setPrivateKey] = useState("")
    const { RequestNetwork } = require("@requestnetwork/request-client.js")

    useEffect(() => {
      getPrivateKey()
    }, [web3auth])

    const getPrivateKey = async () => {
        if (!web3auth.provider) {
            return;
        }
        const rpc = new RPC(web3auth.provider);
        const privateKey = await rpc.getPrivateKey();
        
        setPrivateKey(privateKey)
    };    

    // const {
    //     EthereumPrivateKeySignatureProvider,
    // } = require("@requestnetwork/epk-signature");
    // const { Types } = require("@requestnetwork/request-client.js");
    
    // const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
    //     method: Types.Signature.METHOD.ECDSA,
    //     privateKey: process.env.PAYEE_PRIVATE_KEY, // Must include 0x prefix
    // });


    // const requestClient = new RequestNetwork({
    // nodeConnectionConfig: { 
    //     baseURL: "https://goerli.gateway.request.network/",
    // },
    // signatureProvider: epkSignatureProvider,
    // });

    async function create_request(){

    }

    return(
        <div>
            <button onClick={getPrivateKey}>Get Private Key</button>
            {privateKey}
        </div>
    )

}

export default Request;