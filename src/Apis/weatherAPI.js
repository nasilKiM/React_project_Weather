import { Axios } from "./@core";

export const getWeatherByLocation = async (location) => {
  const url = `?q=${location}`;
  const data = await Axios({
    method: "get",
    url: url,
  });
  return data.data;
};
