import React from "react";
import './Rightbar.css';
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { useMoralis } from "react-moralis";
import { Input } from "web3uikit";
import { defaultImgs } from "../defaultimgs";
import { Icon } from "web3uikit";
import { Link } from "react-router-dom";



const Rightbar = () => {
  const { Moralis} = useMoralis();
  const user = Moralis.User.current();
  const trends = [
    {
      img: spaceshooter,
      text: "Refer more  friends and get up to 5000 BUSD! ",
      Link: "/profile",
    },
    {
      img: netflix,
      text: "Deposit more to get up to 20% bonus for your daily earnings",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    },
    {
      img: academy,
      text: "Deposit now and get up to 30% to your initial deposit!",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: js,
      text: "Win up to 250 000 BUSD in a lottery!",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Coming soon!",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];

  return (
    <>
    <div className="rightbarContent">
      <div className="details">
          <img src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]} className="profilePic"></img>
          <div className="profile">
            <div className="who">
              {user.attributes.username.slice(0, 6)}
            </div>
            <div className="accWhen">
              {`${user.attributes.ethAddress.slice(0, 4)}...${user.attributes.ethAddress.slice(38)}`}
              
            </div>
            <div
              className="logout"
              onClick={() => {
                Moralis.User.logOut().then(() => {
                  window.location.reload();
                });
              }}
            >
              Logout
            </div>
          </div>
        </div>
    <div className="trends">
      Events for you
      {trends.map((e) => {
          return(
            <>
            <div className="trend" onClick={() => window.open(e.link)}>
              <img src={e.img} className="trendImg"></img>
              <div className="trendText">{e.text}</div>
            </div>
            </>
          )
      })}
    </div>
    </div>
    </>
  );
};

export default Rightbar;

