import { useEffect, useRef, useState } from "react";

export default function ScrollMessageApp() {
  const [messages, setMessages] = useState(["Hi! How are You?"]);
  const chatBoxRef = useRef(null);

  const addMessage = () => {
    setMessages((prevMessage) => [...prevMessage, "New Message"]);
  };

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div
        ref={chatBoxRef}
        style={{
          height: "200px",
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Send</button>
    </div>
  );
}
