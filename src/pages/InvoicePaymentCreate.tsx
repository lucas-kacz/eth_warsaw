import { useEffect, useState } from "react";
import RPC from "../utils/ethersRPC"
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { create } from "domain";

interface RouterProps {
    web3auth: any;
    privateKey: string;
}

const InvoicePaymentCreate = ({ web3auth, privateKey }: RouterProps) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [payeeIdentity, setPayeeIdentity] = useState("")
    const { RequestNetwork } = require("@requestnetwork/request-client.js")  

    const paymentRecipient = payeeIdentity;
    const payerIdentity = payeeIdentity;
    const feeRecipient = "0x0000000000000000000000000000000000000000";

    const {EthereumPrivateKeySignatureProvider} = require("@requestnetwork/epk-signature");
    const { Types, Utils } = require("@requestnetwork/request-client.js");
    
    const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
        method: Types.Signature.METHOD.ECDSA,
        privateKey: "0x10adcce71a2b0c4c4c31c257ea0555f9a1ccdb99b6a91e3e8e930124c0c6995a", // Must include 0x prefix
    });

    const requestClient = new RequestNetwork({
        nodeConnectionConfig: {
          baseURL: "https://mainnet.infura.io/v3/3af4e458905a4581879f74b2239a5852",
        },
      });

    //const requestClient = new RequestNetwork({ useMockStorage: true });

    // const requestCreateParameters = {
    //     requestInfo: {
    //         currency: {
    //           type: Types.RequestLogic.CURRENCY.ERC20,
    //           value: "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
    //           network: "alfajores",
    //         },
    //         expectedAmount: "10",
    //         payee: {
    //           type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    //           value: payeeIdentity,
    //         },
    //         payer: {
    //           type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    //           value: payerIdentity,
    //         },
    //         timestamp: Utils.getCurrentTimestampInSecond(),
    //       },
    //       paymentNetwork: {
    //         id: Types.Extension.PAYMENT_NETWORK_ID.ERC20_FEE_PROXY_CONTRACT,
    //         parameters: {
    //           paymentNetworkName: "alfajores",
    //           paymentAddress: paymentRecipient,
    //           feeAddress: feeRecipient,
    //           feeAmount: "0",
    //         },
    //       },
    //       contentData: {
    //         reason: "🍕",
    //         dueDate: "2023.06.16",
    //       },
    //       signer: {
    //         type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    //         value: payeeIdentity,
    //       },
    //     };

        async function createPayment(){
            // const request = await requestClient.createRequest(requestCreateParameters)
            // const requestData = await request.waitForConfirmation();
            // console.log(JSON.stringify(requestData));
        }

    return(
        <div>
            {/* <h1>Invoice Payment Create</h1>
            <input type="text" name="payeeIdentity" onChange={(e) => setPayeeIdentity(e.target.value)}></input>
            {payeeIdentity}
            {privateKey}
            <br/> */}
            {/* <button onClick={createPayment}>Create Payment</button> */}
        </div>
    )
}

export default InvoicePaymentCreate