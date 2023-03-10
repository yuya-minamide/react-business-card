import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  :root {
    --color-bg: #1C1C1C;
    --content-color-bg: #23252C;
    --color-white: #fff;
    --color-light-gray: #F5F5F5;
    --color-gray:#DCDCDC;
    --color-dark-gray: #374151;
    --color-orange: #F3BF99;
    --color-icon: #918E9B;
    --transition: all 400ms ease;
  }
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    font-family: "Alegreya", serif;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.5;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
  }
  h1 {
    font-size: 2.5rem;
    color: var(--color-white);
  }
  a {
    color: var(--color-dark-gray);
    transition: var(--transition);
  }
  a:hover {
    color: var(--color-orange);
  }
  p {
    letter-spacing: 1px;
	  line-height: 1.5;
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;
