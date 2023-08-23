import { useState, useEffect } from "react";
import { ethers } from "ethers";
// import "../App.css"
import AssessmentABI from "../artifacts/contracts/Assessment.sol/Assessment.json";

const nameAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function HomePage() {
  // Property Variables

  const [message, setMessage] = useState("");
  const [currentNaming, setCurrentNaming] = useState("");

  // Requests access to the user's Meta Mask Account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current value store in greeting
  async function fetchNaming() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        nameAddress,
        AssessmentABI.abi,
        provider
      );
      try {
        const data = await contract.name();
        console.log("data: ", data);
        setCurrentNaming(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the greeting from input text box
  async function setNaming() {
    if (!message) return;
  
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        nameAddress,
        AssessmentABI.abi,
        signer
      );
  
      try {
        const transaction = await contract.setNaming(message);
        setMessage("");
        await transaction.wait();
        fetchNaming();
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  

  return (
    <div className="App" style={{
      backgroundColor:"skyblue",
      color:"black",
      //borderRadius:"20px",
      display:"flex",
      justifyContent: "center",
      height:"95vh",
      maxHeight: "100vh",
      padding: "25px",
    }}>
      <div className="App-header">
        {/* DESCRIPTION  */}
        <div className="description">
          
          <h2>Smart Contract Management</h2>
          
        </div>
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button onClick={fetchNaming} style={{ 
            padding:"20px",
            border:"3px black solid",
            backgroundColor: "gray",
            borderRadius:"20px",
            marginBottom:"20px",
            marginRight:"30px",
            color:"black",
            }}>
            Fetch Names
          </button>
          <button onClick={setNaming} style={{ 
            backgroundColor: "gray",
            border:"3px white solid",
            padding:"20px",
            borderRadius:"20px",
            marginBottom:"20px",
            marginRight:"30px" ,
            color:"black",
            }}>
            Set Names
          </button>
        </div>
        {/* INPUT TEXT - String  */}
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Set Naming Message"
          style={{
            justifyContent: "center",
            border:"3px black solid",
            backgroundColor: "white",
            marginTop:"10px",
            padding:"25px",
            borderRadius:"20px",
            width:"210px",
          }}
        />

        {/* Current Value stored on Blockchain */}
        <h2 className="naming" style={{
          padding:"25px",
          backgroundColor: "white",
          color:"Black",
          border: "3px solid black",
          marginTop:"30px",
          borderRadius:"10px",
          justifyContent: "center",
        }}>Names: {currentNaming}</h2>
      </div>
    </div>
  );
}
