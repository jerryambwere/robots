import React from "react";
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
import "./Enlisted.css"; // Import the CSS file for modern styling

const Enlisted = ({ enlist, setEnlist }) => {
  const navigate = useNavigate();

  const handleTerminate = (id) => {
    fetch(`https://bots-backend-chi.vercel.app/bots/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setEnlist(enlist.filter((bot) => bot.id !== id));
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Terminated.",
              icon: "success",
            });
          }
        });
      })
      .catch((error) => {
        console.error("Error terminating bot:", error);
      });
    navigate("/BotsDisplay");
  };

  return (
    <div className="enlisted-container">
      <h2 className="header">Enlisted Bots</h2>
      <div className="bots-list">
        {enlist.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt="avatar" className="bot-avatar" />
            <div className="bot-info">
              <h3 className="bot-name">{bot.name}</h3>
              <p className="bot-class">{bot.bot_class}</p>
              <div className="bot-stats">
                <p>
                  <FontAwesomeIcon icon={faHeartPulse} style={{ color: "#ff0000" }} />{" "}
                  {bot.health}
                </p>
                <p>
                  <FontAwesomeIcon icon={faBolt} style={{ color: "blue" }} />{" "}
                  {bot.damage}
                </p>
                <p>
                  <FontAwesomeIcon icon={faShieldHalved} style={{ color: "#42464c" }} />{" "}
                  {bot.armor}
                </p>
                <p>
                  <FontAwesomeIcon icon={faHeadset} /> {bot.catchphrase}
                </p>
                <p>Created At: {bot.created_at}</p>
                <p>Updated At: {bot.updated_at}</p>
              </div>
            </div>
            <button onClick={() => handleTerminate(bot.id)} className="btn-terminate">
              <strong>Terminate</strong>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enlisted;
