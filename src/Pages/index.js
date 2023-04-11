import styled from "styled-components";
import { useState } from "react";
import { getWeatherByLocation } from "../Apis/weatherAPI";
import getError from "../Error/error";
import Background from "../Components/Background/background";
import IconChange from "../Components/Icon/icon";

const LandingPage = () => {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const [errorMsg, setErrorMsg] = useState();

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await getWeatherByLocation(location);
        setResult(data);
        setErrorMsg();
      } catch (err) {
        setErrorMsg(getError(err));
      }
    }
  };

  return (
    <Wrapper>
      <Background weather={result.weather ? result.weather[0].main : ""} />
      <div className="container">
        <input
          placeholder="어떤 도시의 날씨가 궁금하신가요?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {<div>{errorMsg}</div>}
        {/*result 객체가 비어 있지 않을 때! getWeatherByLocation 함수 실행 -> API 호출 success -> result 객체가 채워졌을 때, ResultWrap 컴포넌트 렌더링*/}
        {Object.keys(result).length !== 0 && (
          <>
            <ResultWrapper>
              <div className="city">{result.name}</div>
              <div className="temp">{Math.round((result.main.temp - 273.15) * 10) / 10}°C</div>
              <div className="icon">
                <IconChange weather={result} />
              </div>
              <div className="sky">{result.weather[0].main}</div>
              <div className="description">({result.weather[0].description})</div>
            </ResultWrapper>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  .container {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
  }
  input {
    width: 350px;
    padding: 16px;
    border: 2px gray solid;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    color: #ffff;
    font-weight: bolder;
    font-size: large;
  }
`;

const ResultWrapper = styled.div`
  margin-top: 50px;
  border: 1px antiquewhite solid;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 8px;
  color: black;
  text-shadow: 5px;
  .city {
    font-size: 27px;
    padding-top: 10px;
  }
  .temp {
    font-size: 60px;
    color: midnightblue;
    margin-top: 8px;
  }
  .icon {
    text-align: right;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
  .description {
    font-size: 15px;
    text-align: right;
    margin-top: 10px;
  }
`;
