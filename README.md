
<p align="center"> 
  <img src ="https://ferrara.link/img/Blockchain-political-election/logo.png" />
</p>

**Solution via blockchain to avoid cheating and illicit financing of political parties.**

### Description

**Anyone wishing to run for politics can open their electoral campaign.**
Through it, he can propose his program, so that every interested person can join by paying a fixed fee of ether (minimum Contribution).
Those ether funds will be deposited in the smart contract, in this way all funding will be tracked.
**Every time the political leader wants to spend the ether present in the smart contract, he must initiate a request**, in which he will specify:

- which address is the ether intended for.

- for what reason.

All the participants who have joined the program can vote, and it **will be possible to send this ether only after 50% + 1 of the participants have voted to approve the request**.
Thanks to the management through smart contracts, it will not be possible to cheat, except with 50% attacks but in any case, everything will be traceable and the requests will be part of the public domain (because are immutable).



### Video

**Note**: The delay is due to the [block time](https://www.investopedia.com/terms/b/block-time-cryptocurrency.asp) 

**Note**: For privacy reasons I have not recorded my accounts, but every time I clicked on [metamask](https://metamask.io/) (the fox) I changed accounts to do the operations.
<p align="center" href="https://ferrara.link/img/Blockchain-political-election/video-blockchain.mp4">
>
<img src="https://ferrara.link/img/Blockchain-political-election/youtube-512.png">
</p>

### How To Install

**Note**: The user using the application is assumed to be using [metamask](https://metamask.io/). So you have to install it. **Don't forget to connect metamask on "localhost:3000" manually** ([here there is a tutorial](https://www.saturn.network/blog/metamask-approve-connections-guide/)).

#### How to Run

1. Download this github folder.
2. Go with the console in this folder.
3. Run "npm install" .
4. Go with the console in the "ethereum" folder.
5. Run "node compile.js".
6. Go in the previous root folder with the console.
7. Run "npm run dev".
8. Now you can see the website on "localhost:3000".

#### Configuration (Not Required for testing)

1. In ethereum/deploy.js you can edit the const provider with your [Mnemonic phrase](https://en.bitcoinwiki.org/wiki/Mnemonic_phrase) and [rendezvous host](https://en.wikipedia.org/wiki/Bootstrapping_node).
2. After that run deploy.js to deploy your smart contract on the ethereum network (in my case it is the Rinkeby Network, a test network). You should see on your console a message like: "Contracy deployed to xxxx", xxxx is your contract address, save it.
3. Go in ethereum/factory.js and edit the const instance with the previous contract address.
4. Run compile.js.

### Credits

- [**Ethereum and Solidity: The Complete Developer's Guide (Udemy course)**](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/), I was inspired by his walkthrough of the course to create something slightly different.
- [React](https://it.reactjs.org/) .
- [Nextjs](https://nextjs.org/).
- [Semantic UI React](https://react.semantic-ui.com/).
- [Solidity](https://github.com/ethereum/solidity).
- [Ethereum](https://ethereum.org/it/).

