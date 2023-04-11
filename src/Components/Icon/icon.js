import React from "react";

const IconChange = ({ weather }) => {
  const getIconUrl = () => {
    const iconCode = weather.weather[0].icon;
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  return <img src={getIconUrl()} alt={weather.weather[0].description} />;
};

export default IconChange;
