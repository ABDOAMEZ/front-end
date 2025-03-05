import { useState, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import "../../styles/ChatBot.css"; // Create this CSS file;

const ChatBot = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);


  const [messages, setMessages] = useState([
    { text: "Hey there\nHow can I help you today?", isBot: true },
    { text: "Hello, please introduce yourself.", isBot: false },
    {
      text: "I'm your helpful AI assistant,\nhere to assist you.",
      isBot: true,
    },
    { text: "Great but I'm just browsing!", isBot: false },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isBot: false }]);
      // Add simulated bot response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Tinking...", isBot: true }]);
      }, 1000);
      setMessage("");
    }
  };


  

  const handleScroll = () => {
    if (window.scrollY >= 550) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="chatbot-container">
      {isChatOpen ? (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chatbot</h3>
            <button className="close-btn" onClick={() => setIsChatOpen(false)}>
              <FiX />
            </button>
          </div>

          <div className="messages-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.isBot ? "bot" : "user"}`}
              >
                {msg.text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button className="send-btn" onClick={sendMessage}>
              <FiSend />
            </button>
          </div>
        </div>
      ) : (
        <>
          {
            isVisible && (
              <button
                onClick={scrollToTop}
                title="Go Top"
                className="chat-toggle topBtn"
              >
                <IoIosArrowUp size={23} />
              </button>
            )
          }

          <button className="chat-toggle" onClick={() => setIsChatOpen(true)}>
            <TbMessageChatbotFilled className="icon" />
          </button>
        </>
      )}
    </div>
  );
};

export default ChatBot;
