import { css } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const fonts = {
  xlarge: (weight: number) => css`
    font-family: ${roboto.style.fontFamily}, Verdana, sans-serif;
    font-size: 32px;
    font-weight: ${weight};
    line-height: 40px;
  `,
  large: (weight: number) => css`
    font-family: ${roboto.style.fontFamily}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 24px;
  `,
  medium: (weight: number) => css`
    font-family: ${roboto.style.fontFamily}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 16px;
  `,
  small: (weight: number) => css`
    font-family: ${roboto.style.fontFamily}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 14px;
  `,
  xsmall: (weight: number) => css`
    font-family: ${roboto.style.fontFamily}, Verdana, sans-serif;
    font-weight: ${weight};
    font-size: 12px;
  `,
};

export default fonts;
