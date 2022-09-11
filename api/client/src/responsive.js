import { css } from "styled-components";

export const xsmall = (props) => {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `;
};

export const small = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const medium = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const large = (props) => {
  return css`
    @media only screen and (max-width: 1280px) {
      ${props}
    }
  `;
};
