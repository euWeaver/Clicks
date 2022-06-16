import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState, useRef, useEffect } from "react";
import { Input } from "web3uikit";
import { defaultImgs } from "../defaultimgs";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const Login = () => {


  const [username, setUsername] = useState();
  const [ref, setRef] = useState();
  const { Moralis, isAuthenticated, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();


  const resolveLink = (url) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  };

  useEffect(() => {

  



   

  },[isAuthenticated, account])


  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (username){
      myDetails.set("username", username);
    }
    if (ref){
      myDetails.set("ref", ref);
    }
  

    await myDetails.save();
    window.location.reload();
  }

  return (
    <>
      <div className="pageIdentify"></div>
      <div className="loginPage">
        <Input
          label="Username"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setUsername(e.target.value)}
        />
        <Input
          label="Referral code"
          name="Ref Change"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setRef(e.target.value)}
        />

        <div className="save" onClick={() => saveEdits()}>
          Sign up
        </div>
      </div>
    </>
  );
};

export default Login;
