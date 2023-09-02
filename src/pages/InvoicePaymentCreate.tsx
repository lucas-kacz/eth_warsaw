import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RPC from "../utils/ethersRPC"
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { create } from "domain";
import { Button } from "@nextui-org/react";

interface RouterProps {
    web3auth: any;
    privateKey: string;
    account: any;
}

const InvoicePaymentCreate = ({ web3auth, privateKey, account }: RouterProps) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [payeeIdentity, setPayeeIdentity] = useState("")

    const navigate = useNavigate();
/*
    const { RequestNetwork } = require("@requestnetwork/request-client.js")  

    const paymentRecipient = payeeIdentity;
    const payerIdentity = payeeIdentity;
    const feeRecipient = "0x0000000000000000000000000000000000000000";

    const {EthereumPrivateKeySignatureProvider} = require("@requestnetwork/epk-signature");
    const { Types, Utils } = require("@requestnetwork/request-client.js");

    console.log("privateKey3: ", privateKey);
    
    const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
        method: Types.Signature.METHOD.ECDSA,
        privateKey: '0x' + privateKey.toString(),
    });

    const requestClient = new RequestNetwork({
        nodeConnectionConfig: {
            baseURL: process.env.REACT_APP_INFURA_LINK || "",
        },
      });

    //const requestClient = new RequestNetwork({ useMockStorage: true });

    const requestCreateParameters = {
        requestInfo: {
            currency: {
              type: Types.RequestLogic.CURRENCY.ERC20,
              value: "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
              network: "alfajores",
            },
            expectedAmount: "10",
            payee: {
              type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
              value: payeeIdentity,
            },
            payer: {
              type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
              value: payerIdentity,
            },
            timestamp: Utils.getCurrentTimestampInSecond(),
          },
          paymentNetwork: {
            id: Types.Extension.PAYMENT_NETWORK_ID.ERC20_FEE_PROXY_CONTRACT,
            parameters: {
              paymentNetworkName: "alfajores",
              paymentAddress: paymentRecipient,
              feeAddress: feeRecipient,
              feeAmount: "0",
            },
          },
          contentData: {
            reason: "🍕",
            dueDate: "2023.06.16",
          },
          signer: {
            type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
            value: payeeIdentity,
          },
        };
*/

        async function createPayment(){
            // const request = await requestClient.createRequest(requestCreateParameters)
            // const requestData = await request.waitForConfirmation();
            // console.log(JSON.stringify(requestData));
        }

    return(
        <div className="page">
            <h1>Invoice Payment Create</h1>
            <input type="text" name="payeeIdentity" onChange={(e) => setPayeeIdentity(e.target.value)}></input>
            {payeeIdentity}
            {privateKey}
            <br/>
            <Button onClick={createPayment}>Create Payment</Button>
        </div>
    )
}

export default InvoicePaymentCreate