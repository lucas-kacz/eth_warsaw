interface RouterProps {
    web3auth: any;
    privateKey: string;
}

const InvoicePaymentCreate = ({ web3auth, privateKey }: RouterProps) => {
    return (
        <div>
            <h1>InvoicePaymentCreate</h1>
            <p>{privateKey}</p>
        </div>
    )
}

export default InvoicePaymentCreate