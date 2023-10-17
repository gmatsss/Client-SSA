import React, { useEffect, useState } from "react";
import logo_small from "../../../../img/logo_small.png";
import LiveDemos from "../../../../img/ipad_live_demo.png";
import ssalogo from "../../../../img/Logo.png";
import sendchat from "../../../../img/sendchat.png";
import "./liveDemo.css"; // Import the CSS file
import { fetchData } from "../../../../api/FetchData";
import { toast } from "react-toastify";

const LiveDemo = () => {
  const [showChat, setShowChat] = useState(
    window.matchMedia("(min-width: 551px)").matches
  );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 550px)").matches
  );
  const [threadId, setThreadId] = useState(null); // New state variable to hold the thread ID
  const [messages, setMessages] = useState([
    { text: "Hey! How can I help you today?", type: "received" },
  ]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 551px)");
    const mobileQuery = window.matchMedia("(max-width: 550px)");

    const handleScreenChange = (e) => setShowChat(e.matches);
    const handleMobileChange = (e) => setIsMobile(e.matches);

    mediaQuery.addListener(handleScreenChange);
    mobileQuery.addListener(handleMobileChange);

    return () => {
      mediaQuery.removeListener(handleScreenChange);
      mobileQuery.removeListener(handleMobileChange);
    };
  }, []);

  useEffect(() => {
    const createNewThread = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "X-Retune-API-Key": "11ee5dba-8b3c-c560-9350-6bb73f8e0f27",
        };
        const response = await fetchData(
          "retune/api/create-thread",
          "POST",
          null,
          headers
        );

        if (response && response.threadId) {
          setThreadId(response.threadId);
        }
      } catch (error) {
        console.error("Error creating new thread:", error);
      }
    };
    createNewThread();
  }, []);

  const handleShowChat = () => {
    setShowChat(!showChat);
    if (!showChat && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value.trim();
    if (!message) {
      toast.error("Please enter a message before sending.");
      return;
    }
    setMessages([...messages, { text: message, type: "sent" }]);
    e.target.elements.message.value = "";

    try {
      const data = {
        threadId: threadId, // use the threadId from state
        input: message,
      };
      const headers = {
        "X-Retune-API-Key": "11ee5dba-8b3c-c560-9350-6bb73f8e0f27",
      };
      const response = await fetchData(
        "retune/api/chat/11ee5dba-b5d3-05f0-849b-e7dd1f1034f3/response",
        "POST",
        data,
        headers
      );

      if (response && response.response && response.response.value) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.response.value, type: "received" },
        ]);
      }
    } catch (error) {
      console.log(error);
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="liveDemo" id="liveDemo">
      <div className="content-overlay-live">
        <div className="textDemo text-center mt-5">
          <img src={logo_small} alt="Super Smart Agents Logo" />
          <h1 className="liveDemoHeader mt-3">Live Agent Demo</h1>
          <p>
            See how Super Smart Agents will help your business eliminate any
            communication roadblocks with your customers and new business
            prospects.
          </p>
        </div>

        <div className="vidDemo mt-5">
          <img className="liveDemoImage" src={LiveDemos} alt="" />

          <button
            className="show-chat-button"
            onClick={handleShowChat}
            style={{ display: showChat ? "none" : "block" }}
          >
            Show Live Chat
          </button>
          <div
            className="livechat"
            style={{ display: showChat ? "flex" : "none" }}
          >
            <div className="headerchat">
              <img className="" style={{ width: "25%" }} src={ssalogo} alt="" />
              <button onClick={handleShowChat} className="close-buttonchat">
                ✖
              </button>
            </div>

            <div className="wrapper">
              <ul>
                {messages.map((message, index) => (
                  <li key={index} className={message.type}>
                    {message.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footerchat">
              <form onSubmit={handleChatSubmit} className="searchBox">
                <input
                  className="searchInput"
                  type="text"
                  name="message" // Add name attribute to access the value in handleChatSubmit
                  placeholder="Type something here"
                />
                <button type="submit" className="searchButton buttonchat">
                  <img src={sendchat} className="sendimg" alt="" />
                  {/* send svg */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showChat && isMobile && <div className="overlay"></div>}
    </div>
  );
};

export default LiveDemo;
