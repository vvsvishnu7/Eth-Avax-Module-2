# METACRAFTERS

This project showcases the integration of a smart contract with a frontend application using Ethereum, React, and Hardhat.

# Smart Contract:
The employed smart contract, named Assessment.sol, is a simple one designed to facilitate setting and retrieving a naming message.

# Frontend:
The frontend is constructed using React and interacts seamlessly with the deployed smart contract. The key frontend functionalities encompass fetching the current naming message and configuring a new one.

# Prerequisites:

Node.js
MetaMask browser extension
# Getting Started:

Clone the repository: Use the command git clone to clone the repository.
Install dependencies: Navigate to the project directory and run npm install.
Initiate a local Ethereum network: Execute npx hardhat node to start a local Ethereum network using Hardhat. Remember the network URL for the MetaMask setup.
Configure MetaMask:
Install MetaMask and create an Ethereum network, setting the URL to the local Hardhat network.
Import an account from the local Hardhat network to MetaMask.
Deploy the Smart Contract: Deploy the Assessment smart contract on the local network by running npx hardhat run scripts/deploy.js --network localhost. Ensure the local Ethereum network is active before deployment.
Update Frontend Configuration: In the index.js file, update the nameAddress variable with the deployed contract address acquired from the deployment step.

# Starting the Frontend Development Server:
Run npm run dev to initiate the frontend development server. Access the application in your browser at http://localhost:3000.

# Usage:
The main page of the front end displays the existing naming message from the smart contract. To update the naming, input a new message and click "Set naming". Ensure your MetaMask account linked to the local Ethereum network contains sufficient funds. The revised naming will be stored on the blockchain, and the page will exhibit the updated message.

# Resources:

Ethereum
React
Hardhat
MetaMask

# Author:
Vishnu Vishvas Sharma

# License:
This project holds an MIT License.
