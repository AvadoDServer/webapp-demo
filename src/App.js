import React from 'react';
import logo from './logo.svg';
import './App.css';
import { providers } from "ethers";

function App() {

    const [blockNumber, setBlocknumber] = React.useState();
    const [nodeAddressfield, setNodeAddressfield] = React.useState("http://my.ethchain-geth.public.dappnode.eth:8545/");
    // const [provider, setProvider] = React.useState();

    React.useEffect(() => {
        applyProvider();
    });

    const applyProvider = () => {

        // mainnet
        const provider = new providers.JsonRpcProvider(nodeAddressfield);


        provider.getBlockNumber().then((blockNumber) => {
            setBlocknumber(blockNumber);
        });

        provider.on('block', (blockNumber) => {
            setBlocknumber(blockNumber);
        });

        // setProvider(provider);

    }

    return (
        <div className="App">
            <header className="App-header">
                <input onChange={(e) => { setNodeAddressfield(e.target.value) }} value={nodeAddressfield} />
                <button onClick={applyProvider}>Set provider</button>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {blockNumber}
                </p>
            </header>
        </div>
    );
}

export default App;
