interface RouterProps {
    web3auth: any;
    privateKey: string;
}

const InvoicePaymentPay = ({ web3auth, privateKey }: RouterProps) => {
    return (
        <div>
            <h1>InvoicePaymentPay</h1>
            <p>{privateKey}</p>
        </div>
    )
}

export default InvoicePaymentPay