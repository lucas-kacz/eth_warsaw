const { RequestNetwork } = require("@requestnetwork/request-client.js")

const {
    EthereumPrivateKeySignatureProvider,
  } = require("@requestnetwork/epk-signature");
  const { Types } = require("@requestnetwork/request-client.js");
  
  const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
    method: Types.Signature.METHOD.ECDSA,
    privateKey: process.env.PAYEE_PRIVATE_KEY, // Must include 0x prefix
  });


const requestClient = new RequestNetwork({
  nodeConnectionConfig: { 
    baseURL: "https://goerli.gateway.request.network/",
  },
  signatureProvider: epkSignatureProvider,
});

interface RouterProps {
    web3auth: any;
}

async function create_request(){
    
}

const Request = ({ web3auth }: RouterProps) => {
    return(
        <div>

        </div>
    )
}

export default Request;