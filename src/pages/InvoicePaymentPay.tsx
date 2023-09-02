interface RouterProps {
    web3auth: any;
    privateKey: string;
    account: any;
}

const InvoicePaymentPay = ({ web3auth, privateKey, account }: RouterProps) => {
    console.log(account);
    return (
        <div>
            <h1>InvoicePaymentPay</h1>
            <p>{privateKey}</p>
            <p>{account}</p>
        </div>
    )
}

export default InvoicePaymentPay