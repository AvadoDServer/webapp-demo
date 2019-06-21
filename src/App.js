import React from 'react';
import logo from './logo.svg';
import './App.css';
import { providers } from "ethers";

function App() {

    const [blockNumber, setBlocknumber] = React.useState();

    React.useEffect(() => {
        const provider = new providers.JsonRpcProvider("http://my.ethchain.dnp.dappnode.eth:8545");

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
