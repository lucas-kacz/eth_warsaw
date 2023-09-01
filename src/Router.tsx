import { Route, Routes } from "react-router-dom";
import { Web3Auth } from "@web3auth/modal";

import Home from "./pages/Home";

interface RouterProps {
    web3auth: any;
  }

function Router ({ web3auth }: RouterProps) {
    return(
        <Routes>
            <Route path="/" element={<Home web3auth={web3auth} />} />
        </Routes>
    )
}

export default Router;