import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RPC from "../utils/ethersRPC";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { create } from "domain";
import { Button } from "@nextui-org/react";

interface RouterProps {
    web3auth: any;
    account: any;
}

const InvoicePaymentCreate = ({ web3auth, account }: RouterProps) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    async function createPayment() {
      const rpc = new RPC(web3auth.provider);
      const result = await rpc.createInvoiceRequestPayment();
      console.log("res: ", result);
    }

    return(
        <div className="page">
            <h1>Invoice Payment Create</h1>
            <button onClick={createPayment}>Get Private Key</button>
            {/* <Button onClick={createPayment}>Create Payment</Button> */}
        </div>
    )
}

export default InvoicePaymentCreate