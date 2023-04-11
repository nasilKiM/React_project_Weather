import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global";
import { theme } from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

// import styled from "styled-components";
// import { useState } from "react";
// import { getWeatherByLocation } from "./Apis/weatherAPI";
// import getError from "./Error/error";

// function App() {
//   const [location, setLocation] = useState("");
//   const [result, setResult] = useState({});
//   const [errorMsg, setErrorMsg] = useState();

//   const searchWeather = async (e) => {
//     if (e.key === "Enter") {
//       try {
//         const data = await getWeatherByLocation(location);
//         setResult(data);
//         setErrorMsg();
//       } catch (err) {
//         setErrorMsg(getError(err));
//       }
//     }
//   };

//   return (
//     <AppWrap>
//       <div className="appContentWrap">
//         <input
//           placeholder="도시를 입력하세요"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           type="text"
//           onKeyDown={searchWeather}
//         />
//         {<div>{errorMsg}</div>}
//         {Object.keys(result).length !== 0 && (
//           <ResultWrap>
//             <div className="city">{result.name}</div>
//             <div className="temperature">{Math.round((result.main.temp - 273.15) * 10) / 10}°C</div>
//             <div className="sky">{result.weather[0].main}</div>
//           </ResultWrap>
//         )}
//       </div>
//     </AppWrap>
//   );
// }

// export default App;

// const AppWrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   .appContentWrap {
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     position: absolute;
//     padding: 20px;
//   }
//   input {
//     padding: 16px;
//     border: 2px black solid;
//     border-radius: 16px;
//   }
// `;

// const ResultWrap = styled.div`
//   margin-top: 60px;
//   border: 1px black solid;
//   padding: 10px;
//   border-radius: 8px;
//   .city {
//     font-size: 24px;
//   }
//   .temperature {
//     font-size: 60px;
//     margin-top: 8px;
//   }
//   .sky {
//     font-size: 20px;
//     text-align: right;
//     margin-top: 8px;
//   }
// `;
