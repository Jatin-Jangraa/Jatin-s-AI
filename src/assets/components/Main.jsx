import React from "react";
import { assets } from "../../assets/assets";

import "./Main.css";
import { useContext } from "react";
import { Context } from "./Context";

const Main = () => {
  const {
    onsent,
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Jatin's AI Chat Bot</p>
        <img   src={assets.gemini_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult?<><div className="greet">
          <p>
            <span>Hello,Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest  place</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Urban planing</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm team</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Readability </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div></>:<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className="loader">
              <hr />
              <hr />
              <hr />

            </div>: <p >{resultData}</p>
          }


          </div>
          </div>}
        
        

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="search"
              type="text"
              placeholder="Enter a Prompt Here.."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onsent()} src={assets.send_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
