import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loaders.css";
import "./BotDisplay.css"; // Import new CSS file for modern styling

const BotDisplay = () => {
  const navigate = useNavigate();
  const [bot, setBot] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://bots-backend-chi.vercel.app/bots")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setBot(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  function handleViewMore(id) {
    navigate(`/ArmyBots/${id}`);
  }

  if (loading) {
    return (
      <div className="loader-container">
        {/* Loader styling can be added here */}
        <svg viewBox="0 0 240 240" height="240" width="240" className="pl">
          <circle
            strokeLinecap="round"
            strokeDashoffset="-330"
            strokeDasharray="0 660"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="105"
            cy="120"
            cx="120"
            className="pl__ring pl__ring--a"
          ></circle>
          <circle
            strokeLinecap="round"
            strokeDashoffset="-110"
            strokeDasharray="0 220"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="35"
            cy="120"
            cx="120"
            className="pl__ring pl__ring--b"
          ></circle>
          <circle
            strokeLinecap="round"
            strokeDasharray="0 440"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="70"
            cy="120"
            cx="85"
            className="pl__ring pl__ring--c"
          ></circle>
          <circle
            strokeLinecap="round"
            strokeDasharray="0 440"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="70"
            cy="120"
            cx="155"
            className="pl__ring pl__ring--d"
          ></circle>
        </svg>
      </div>
    );
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="bot-display-container">
      {bot.map((botItem) => (
        <div key={botItem.id} className="bot-card">
          <img src={botItem.avatar_url} alt="avatar" className="bot-avatar" />
          <h1 className="bot-name">{botItem.name}</h1>
          <p className="bot-class">{botItem.bot_class}</p>
          <button
            onClick={() => handleViewMore(botItem.id)}
            type="button"
            className="btn-view-more"
          >
            <strong>View More</strong>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotDisplay;
