import { css } from '@emotion/react'

const global = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  html,
  body,
  #root {
    height: 100%;
    font-size: 14px;
  }

  #__next {
    height: 100%;
  }

  body {
    font-family: Pretendard, sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  a:active,
  a:active {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    line-height: inherit;
    border: none;
  }

  input,
  label,
  select,
  button,
  textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    background: none;
    line-height: 1;
    font: inherit;
  }
`

export default global
