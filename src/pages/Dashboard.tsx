import { useEffect, useState } from "react";
import RPC from "../utils/ethersRPC";
import { Button } from "@nextui-org/react";
import axios from "axios";

interface RouterProps {
    web3auth: any;
}

const Dashboard = ({ web3auth }: RouterProps) => {

    const [user, setUser] = useState<any>(null);
    const [address, setAddress] = useState<any>(null);

    var Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: process.env.REACT_APP_AIRTABLE_API || "",
    });
    var base = Airtable.base('appFQhXiLloPeeAQC');

    const checkKYB = async () => {
        var alreadyExists = false;
        var sessionId = "";
        base('Data').select({
            view: "Grid view",
        }).eachPage(function page(records: any, fetchNextPage: any) {
            records.forEach(function(record: any) {
                if(record.get('address') === address) {
                    alreadyExists = true;
                    sessionId = record.get('session_id');
                }
            });
            fetchNextPage();
        }, function done(err: any) {
            if (err) { console.error(err); return; }
        });
        if(alreadyExists) {
            await axios({
                method: 'get',
                url: 'https://api.synaps.io/v4/individual/session/' + sessionId,
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": process.env.REACT_APP_SYNAPS_API_KEY || "",
                    },
                    })
                    .then(function (response: any) {
                        console.log(response);
                        if(response.data.session.status !== "APPROVED") {
                            window.open(`https://verify-v3.synaps.io/?session_id=${sessionId}&service=corporate`);
                        }
                    })
                    .catch(function (error: any) {
                        console.log(error);
                    });

            await fetch("https://api.synaps.io/v4/individual/session/" + sessionId,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": process.env.REACT_APP_SYNAPS_API_KEY || "",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.session.status !== "APPROVED") {
                    window.open(`https://verify-v3.synaps.io/?session_id=${sessionId}&service=corporate`);
                }
            }
            );
        } else {
            await axios({
                method: 'post',
                url: 'https://api.synaps.io/v4/individual/session/init',
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": process.env.REACT_APP_SYNAPS_API_KEY || "",
                    },
                    })
                    .then(function (response: any) {
                        console.log(response);
                        sessionId = response.data.session.id;
                        window.open(`https://verify-v3.synaps.io/?session_id=${sessionId}&service=corporate`);
                    })
                    .catch(function (error: any) {
                        console.log(error);
                    });
        }
    }
            

    const getUserInfo = async () => {
        if (!web3auth) {
        return("web3auth not initialized yet");
        }
        const user = await web3auth.getUserInfo();
        setUser(user);
        return(user);
    };

    const getAccounts = async () => {
        if (!web3auth.provider) {
        return("provider not initialized yet");
        }
        const rpc = new RPC(web3auth.provider);
        const address = await rpc.getAccounts();
        setAddress(address);
        return(address);
    };

    useEffect(() => {
        if (web3auth) {
            checkKYB();
        }
    }, [web3auth]);

    return (
        <div className="page">
            <h1>Dashboard</h1>
            <Button onClick={getUserInfo}>Get User Info</Button>
            <Button onClick={getAccounts}>Get Accounts</Button>
            <p>{user ? JSON.stringify(user) : "No user info"}</p>
            <p>{address ? JSON.stringify(address) : "No address"}</p>
        </div>
    );
}

export default Dashboard;