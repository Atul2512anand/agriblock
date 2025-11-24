🌾 AgroChain – Blockchain-Based Agriculture Supply Chain Transparency
**MORE DETAILS ARE IN FINALPPT.PDF**

AgroChain is a decentralized platform designed to bring transparency, traceability, and trust to the agriculture supply chain. By leveraging Ethereum/Polygon smart contracts, QR-code-based tracking, and a modern React + Vite frontend, the system enables all stakeholders (farmers, distributors, retailers, consumers) to verify the entire lifecycle of agricultural produce — from farm to table.

🚀 Project Overview

Agriculture supply chains often lack transparency, leaving farmers underpaid and consumers unaware of the origin or quality of their food. AgroChain solves this by:

Providing tamper-proof blockchain records

Ensuring fair pricing for farmers

Allowing consumers to scan a QR code and verify authenticity

Offering a simple, mobile-friendly web interface

🛠️ Tech Stack
Frontend

React (Vite) + TypeScript

TailwindCSS + shadcn/ui

React Router

Chart.js + React Chart.js 2

Three.js / Drei (if using 3D elements)

QR Generator Library

Form validation using Zod + React Hook Form

Blockchain

Smart contract written in Solidity

Network: Ethereum / Polygon (L2 recommended)

Off-chain media storage: IPFS / Cloud Storage

📦 Folder Structure
/
├── index.html                # Main entry point
├── package-lock.json
├── package.json
├── /src
│   ├── main.tsx
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── styles/
├── /contracts
│   └── LatestAgriSupplyChain.sol
├── public/
└── README.md

📄 Smart Contract Features

File: LatestAgriSupplyChain.sol

Registers farmers, distributors, retailers

Creates produce batches with unique IDs

Tracks:

Harvest details

Transport info

Quality checks

Delivery updates

Generates QR Code → BatchID

Provides complete traceability logs

🌐 Frontend Features

The index.html + React UI provides:

Farmer portal

Distributor/Retailer portal

Consumer portal (QR scan → full trace history)

Dashboard analytics using charts

Modern UI with shadcn components

📲 User Journey
For Farmers

Register on blockchain

Add produce batch

Upload data (weight, grade, harvest time)

For Distributors / Retailers

Update transport & warehouse details

Approve quality checks

For Consumers

Scan QR code

View full trace: farm → transport → store

Verify authenticity

🔧 Setup Instructions
1. Clone the Repo
git clone https://github.com/your-username/agrochain.git
cd agrochain

2. Install Dependencies
npm install

3. Run Development Server
npm run dev

4. Compile Smart Contract

Using Hardhat or Remix:

npx hardhat compile

5. Deploy Contract

Modify config.js with contract address after deployment.

🔍 How It Works

Smart contract stores secure records of all produce lifecycle events.

Frontend interacts with MetaMask to send transactions.

Each produce batch gets a QR code → consumer scans it.

Backend fetches blockchain data + IPFS data.

Consumer sees complete authenticated history.

📘 Research References (Used in Project)

Blockchain Technology to Support Agri-Food Supply Chains (IEEE)

Blockchain-driven Agricultural Product Traceability & Management (IEEE)

Sample repos:

kerala-blockchain-academy/AgroChain

anotherwebguy/Agri-SupplyChain

ac12644/Supply-Chain-Smart-Contract

📈 Impact

✔ Fair pricing
✔ Reduce fraud
✔ End-to-end trust
✔ Farmer empowerment
✔ Transparent food supply chain

🧑‍💻 Team

AgroChain Innovators

📜 License

MIT License
