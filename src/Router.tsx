import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import InvoicePaymentCreate from "./pages/InvoicePaymentCreate";
import InvoicePaymentPay from "./pages/InvoicePaymentPay";
import InvoicePaymentUpdate from "./pages/InvoicePaymentUpdate";

interface RouterProps {
    web3auth: any;
    privateKey: string;
    account: string;
  }

function Router ({ web3auth, privateKey, account }: RouterProps) {
    console.log("privateKey2: ", privateKey);
    return(
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/dashboard" element={<Dashboard web3auth={web3auth} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invoice_payment/create" element={<InvoicePaymentCreate web3auth={web3auth} privateKey={privateKey} account={account} />} />
            <Route path="/invoice_payment/pay" element={<InvoicePaymentPay web3auth={web3auth} privateKey={privateKey} account={account} />} />
            <Route path="/invoice_payment/update" element={<InvoicePaymentUpdate web3auth={web3auth} privateKey={privateKey} account={account} />} />
        </Routes>
    )
}

export default Router;