import { css } from "styled-components";

const fonts = {
  xlarge: (weight = 400, family = "Roboto") => css`
    font-family: ${family}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 32px;
    line-height: 40px;
  `,
  large: (weight = 400, family = "Roboto") => css`
    font-family: ${family}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 24px;
  `,
  medium: (weight = 400, family = "Roboto") => css`
    font-family: ${family}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 16px;
  `,
  small: (weight = 400, family = "Roboto") => css`
    font-family: ${family}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 14px;
  `,
  xsmall: (weight = 400, family = "Roboto") => css`
    font-family: ${family}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 12px;
  `,
};

export default fonts;
