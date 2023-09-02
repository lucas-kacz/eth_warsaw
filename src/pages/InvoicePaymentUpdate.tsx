interface RouterProps {
    web3auth: any;
    privateKey: string;
    account: string;
}

const InvoicePaymentUpdate = ({ web3auth, privateKey, account }: RouterProps) => {
    return (
        <div className="page">
            <h1>InvoicePaymentUpdate</h1>
            <p>{privateKey}</p>
            <p>{account}</p>
        </div>
    )
}

export default InvoicePaymentUpdate