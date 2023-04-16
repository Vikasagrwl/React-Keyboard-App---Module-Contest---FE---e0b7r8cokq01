import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
  const [msg, setMsg] = useState("");
  const [quote, setQuote] = useState("");

  const handleClick = (e) => {
    setMsg(msg+e.target.value);
  };

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const quote = await response.json();
      setQuote(quote.content);
    };
    fetchQuote();
  }, []);

  return (
    <>
      {msg === "forty two" ? (
        <div className="quote">{quote}</div>
      ) : (
        <div className="keyboard">
          <div className="preview">
            {msg}
          </div>
          <div>
            {keys.map((key) => (
              <button
                key={key}
                id={key === " " ? `key-space` : `key-${key}`}
                value={key}
                onClick={handleClick}
              >
                {key === " " ? "Space" : key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
