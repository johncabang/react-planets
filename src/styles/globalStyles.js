import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #ffffff;
  background-color: #070724;
}

p {
  font-size: 14px;
  line-height: 25px;
  font-family: 'Spartan', sans-serif;
}

h1 {
  font-size: 80px;
  line-height: 103px;
  font-family: 'Antonio', sans-serif;
}

h2 {
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.5;
  font-family: 'Antonio', sans-serif;
}

h3 {
  font-size: 12px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 2.6;
  font-family: 'Spartan', sans-serif;
}

h4 {
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 1;
  font-family: 'Spartan', sans-serif;
}

`;

export default GlobalStyles;