interface RouterProps {
    web3auth: any;
    privateKey: string;
}

const InvoicePaymentUpdate = ({ web3auth, privateKey }: RouterProps) => {
    return (
        <div>
            <h1>InvoicePaymentUpdate</h1>
            <p>{privateKey}</p>
        </div>
    )
}

export default InvoicePaymentUpdate