import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea, Icon } from "web3uikit";
import { useState, useRef } from "react";
import TweetInFeed from "../components/TweetInFeed";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useMoralisQuery } from "react-moralis";
import { useWeb3Transfer } from "react-moralis";
import error from "web3uikit";


const Dashboard = () => {

  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
 
  const contractProcessor = useWeb3ExecuteFunction();





    const { fetch, error, isFetching } = useWeb3Transfer({
      amount: Moralis.Units.Token(0.5, 18),
      receiver: "0xfe0e94aAF23558977553d3a1c03dB100565bFb81",
      type: "erc20",
      contractAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    });
  
  

 
  return (
    <>
    <div className="pageIdentify">Dashboard</div>
      <div className="mainContent">
        <div className="profileTweet">
          <img src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]} className="profilePic"></img>
          <div className="profile">
            <div className="who">
              {user.attributes.username.slice(0, 15)}
            </div>
            <div className="accWhen">
              <div>
              My referral code
              </div>
              {`${user.attributes.ethAddress.slice(0, 38)}`}
              
            </div>
            <div className="balance1">
              
              {user.attributes.balance1}
            </div>
            </div>
           
          
        </div>
        
        <div className="balance">
          Balance
        </div>
        <div className="balance1">
          
              {user.attributes.balance1}
            </div>
            <div className="profit">
          Total profit
        </div>
        <div className="totprof">
          
              {user.attributes.totalProfit}
            </div>
            <div className="profittod">
          Today profit
        </div>
        <div className="todprof">
          
              {user.attributes.todayProfit}
            </div>

            <div>
      {error && <error error={error} />}
      <button onClick={() => fetch()} disabled={isFetching}>
        Deposit
      </button>
    </div>
      </div>
      
    </>
  );
};

export default Dashboard;
