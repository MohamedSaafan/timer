import { useEffect, useState } from "react";
import "./Time-item.css";
import pauseButton from "../images/pause_button.png";
import playButton from "../images/play_button.png";
const TimeItem = ({ companyLogo, companyName, info }) => {
  const [time, setTime] = useState(0);
  const [timeStarted, setTimeStarted] = useState(false);
  let actionsButtonSrcImage = playButton;
  if (timeStarted) actionsButtonSrcImage = pauseButton;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  useEffect(() => {
    let intervalKey;
    if (timeStarted)
      intervalKey = setInterval(() => {
        setTime((milliseconds) => milliseconds + 1000);
      }, 1000);

    return () => {
      clearInterval(intervalKey);
    };
  }, [timeStarted]);

  const handleActionsClick = () => {
    if (timeStarted) {
      setTimeStarted(false);
    } else {
      setTimeStarted(true);
    }
  };

  return (
    <div class="card">
      <button className="card__btn" onClick={handleActionsClick}>
        <img src={actionsButtonSrcImage} />
      </button>
      <div className="card__logo">
        <div className="card__logo__image">
          <img src={companyLogo} alt={companyName} />
        </div>
        <h1 className="card__logo__name">{companyName}</h1>
      </div>
      {time ? millisToMinutesAndSeconds(time) : <div></div>}
    </div>
  );
};

export default TimeItem;
