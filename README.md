# hardhat-erc20
The AbToken is a smart contract written in Solidity on the Ethereum blockchain. The contract defines a new ERC20 token named AbToken (ABT) with a capped supply and burnable functionality. It also has a custom block reward feature that incentivizes miners to process transactions on the network.

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like `x.x.x`
    - You might need to install it with npm

## Quickstart

```
git clone https://github.com/Ab-verse/hardhat-erc20.git
cd hardhat-erc20
yarn
```
# Usage

Deploy:

```
yarn hardhat deploy
```

# Deployment to a testnet or mainnet

1. Setup environment variabltes

You'll want to set your `INFURA_GOERLI_ENDPOINT` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `INFURA_GOERLI_ENDPOINT`: This is url of the goerli testnet node you're working with. You can get setup with one for free from [INFURA](https://infura.io/)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Deploy

```
yarn hardhat deploy --network INFURA_GOERLI_ENDPOINT
```
Here is my token on Goerli Ether Scan: https://goerli.etherscan.io/address/0xD1675Afb1E9bf804042488F8b7050565986aEa66

# Thank you!

[![Abhishek S Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Abverse_)
[![Abhishek S Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-s-ckm)



