import React, { useEffect, useState } from "react";
import logo_small from "../../../../img/logo_small.png";
import LiveDemos from "../../../../img/ipad_live_demo.png";
import ssalogo from "../../../../img/ssalogo.png";
import sendchat from "../../../../img/sendchat.png";
import "./liveDemo.css"; // Import the CSS file
import { fetchData } from "../../../../api/FetchData";

const LiveDemo = () => {
  const [showChat, setShowChat] = useState(
    window.matchMedia("(min-width: 551px)").matches
  );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 550px)").matches
  );
  // Initialize messages with a message from the server
  const [messages, setMessages] = useState([
    { text: "Hey! How can I help you today?", type: "received" },
  ]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 551px)");
    const mobileQuery = window.matchMedia("(max-width: 550px)");
    const handleScreenChange = (e) => {
      setShowChat(e.matches);
    };
    const handleMobileChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleScreenChange);
    mobileQuery.addListener(handleMobileChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeListener(handleScreenChange);
      mobileQuery.removeListener(handleMobileChange);
    };
  }, []);

  useEffect(() => {
    const storedThreadId = localStorage.getItem("threadId");
    if (!storedThreadId) {
      const createNewThread = async () => {
        try {
          const headers = {
            "Content-Type": "application/json",
            "X-Retune-API-Key": "11ee3f2c-5d89-3c90-982f-e3db3ec65684",
          };
          const response = await fetchData(
            "retune/api/create-thread",
            "POST",
            null,
            headers
          );
          if (response && response.threadId) {
            localStorage.setItem("threadId", response.threadId);
          }
        } catch (error) {
          console.error("Error creating new thread:", error);
        }
      };
      createNewThread();
    } else {
      const getMessages = async () => {
        try {
          const headers = {
            "Content-Type": "application/json",
            "X-Retune-API-Key": "11ee3f2c-5d89-3c90-982f-e3db3ec65684",
          };
          const data = {
            threadId: storedThreadId,
            // add other data like 'from' and 'total' if needed
          };

          const response = await fetchData(
            "retune/api/get-messages",
            "POST",
            data,
            headers
          );

          if (response && response.messages) {
            // Map the messages to the desired format
            const formattedMessages = response.messages
              .map((msg) => ({
                text: msg.content, // use msg.content as text
                type: msg.from === "assistant" ? "received" : "sent", // set type based on msg.from
              }))
              .reverse(); // reverse the order of messages
            setMessages(formattedMessages);
          }
        } catch (error) {
          console.error("Error getting messages:", error);
        }
      };
      getMessages();
    }
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
    const message = e.target.elements.message.value;
    setMessages([...messages, { text: message, type: "sent" }]);
    e.target.elements.message.value = "";

    // Get threadId from localStorage
    const threadId =
      localStorage.getItem("threadId") ||
      "11ee5e84-f388-d8f0-9f4b-63dfdf1a3f9c"; // replace "defaultThreadId" with the action to create a new threadId

    try {
      const data = {
        threadId: threadId, // use the threadId from localStorage
        input: message,
      };
      const headers = {
        "X-Retune-API-Key": "11ee3f2c-5d89-3c90-982f-e3db3ec65684",
      };
      const response = await fetchData(
        "retune/api/chat/11ee5547-2718-3180-8654-63b6aca533f6/response",
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
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="liveDemo" id="liveDemo">
      <div className="content-overlay-live">
        <div className="textDemo text-center mt-5">
          <img src={logo_small} alt="" />
          <h1 className="liveDemoHeader">View Live Demo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            animi quos aspernatur inventore provident, voluptatum aliquam a
            sapiente sequi tempore.
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
