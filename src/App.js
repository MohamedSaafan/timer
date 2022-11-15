import "./App.css";
import TimeItem from "./Time-Item/index.js";
import bunchImage from "./images/bunch.jpeg";

const TimeTracker = (props) => {
  return (
    <div className="App">
      <TimeItem companyLogo={bunchImage} companyName="Buchinger Wilhelmi" />
    </div>
  );
};

export default TimeTracker;
