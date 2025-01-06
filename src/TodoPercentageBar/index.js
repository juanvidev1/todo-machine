import React from "react";

function TodoPercentageBar(props) {
  let bgColor = "";
  let opacity = 1;
  if (props.completedPercentage >= 90) {
    bgColor = "#60ff0a";
  } else if (props.completedPercentage < 50 && props.completedPercentage >= 1) {
    bgColor = "red";
  } else if (props.completedPercentage >= 50) {
    bgColor = "yellow";
  } else {
    bgColor = "whitesmoke";
  }

  if (props.loading) {
    opacity = 0.5;
    bgColor = "grey";
  }

  const percentageBar = {
    width: `${props.completedPercentage}%`,
    backgroundColor: bgColor,
    height: "100%",
    borderRadius: "40px",
    // display: 'flex',
    // alignItems: 'center',
    textAlign: "right",
    opacity: opacity,
  };

  const percentageText = {
    padding: "0.5rem",
    color: "black",
    fontWeight: "bold",
    fontSize: "1.5rem",
    opacity: opacity,
  };

  return (
    <div className="percentage-container">
      <div className="percentage-bar" style={percentageBar}>
        <span style={percentageText}>{props.completedPercentage}%</span>
      </div>
    </div>
  );
}

export { TodoPercentageBar };
