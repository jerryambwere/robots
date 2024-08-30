import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faBolt,
  faShieldHalved,
  faList,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./Loaders.css";
import "./Buttons.css";
import "./ArmyBot.css"; // Import new CSS file for modern styling

const ArmyBots = ({ enlist, setEnlist }) => {
  const [bot, setBot] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://bots-backend-chi.vercel.app/bots/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((bot) => {
        setBot(bot);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bot data:", error);
        setLoading(false);
      });
  }, [id]);

  const handleEnlist = (bot) => {
    if (!enlist.some((existingBot) => existingBot.id === bot.id)) {
      setEnlist((prevEnlist) => [...prevEnlist, bot]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${bot.name} has been enlisted.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `${bot.name} is already enlisted.`,
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    navigate("/enlisted");
  };

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

  return (
    <div className="army-bots-container">
      <div className="bot-card">
        <img src={bot.avatar_url} alt="avatar" className="bot-avatar" />
        <h1 className="bot-name">{bot.name}</h1>
        <div className="bot-details">
          <p>
            <FontAwesomeIcon
              icon={faHeartPulse}
              fade
              className="icon health-icon"
            />{" "}
            {bot.health}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faBolt}
              fade
              className="icon damage-icon"
            />{" "}
            {bot.damage}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faShieldHalved}
              fade
              className="icon armor-icon"
            />{" "}
            {bot.armor}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faList}
              className="icon class-icon"
            />{" "}
            {bot.bot_class}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faHeadset}
              className="icon catchphrase-icon"
            />{" "}
            {bot.catchphrase}
          </p>
          <p className="timestamps">
            Created At: {bot.created_at}
          </p>
          <p className="timestamps">
            Updated At: {bot.updated_at}
          </p>
        </div>
        <button
          onClick={() => handleEnlist(bot)}
          type="button"
          className="btn-enlist"
        >
          <strong>Enlist</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ArmyBots;
