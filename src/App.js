import React from 'react';
import logo from './logo.svg';
import './App.css';
import { providers } from "ethers";

function App() {

    const [blockNumber, setBlocknumber] = React.useState();

    React.useEffect(() => {
        // goerli testnet
        //const provider = new providers.JsonRpcProvider("http://172.20.0.103:8545");

        // ropsten testnet
        //const provider = new providers.JsonRpcProvider("http://172.20.0.103:8555");

        // mainnet
        const provider = new providers.JsonRpcProvider("http://172.20.0.101:8545");


        provider.getBlockNumber().then((blockNumber) => {
            setBlocknumber(blockNumber);
        });

        provider.on('block', (blockNumber) => {
            setBlocknumber(blockNumber);
        });

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {blockNumber}
                </p>
            </header>
        </div>
    );
}

export default App;
