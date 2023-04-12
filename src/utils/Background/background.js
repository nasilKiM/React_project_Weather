import React from "react";

const Background = ({ weather }) => {
  let backgroundImgUrl = "";

  switch (weather) {
    case "Clear":
      backgroundImgUrl = "./Assets/clear.jpg";
      break;
    case "Clouds":
      backgroundImgUrl = "./Assets/clouds.jpg";
      break;
    case "Rain":
      backgroundImgUrl = "./Assets/rain.jpg";
      break;
    case "Mist":
      backgroundImgUrl = "./Assets/mist.jpg";
      break;
    case "Snow":
      backgroundImgUrl = "./Assets/snow.jpg";
      break;
    default:
      backgroundImgUrl = "./Assets/default.jpg";
      break;
  }

  const styles = {
    backgroundImage: `url(${backgroundImgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  };

  return <div style={styles}></div>;
};

export default Background;
