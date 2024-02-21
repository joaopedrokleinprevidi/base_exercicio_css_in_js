import styled from "styled-components";

export type Props = {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  children: string;
};

export const Paragrafo = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "16px")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily + ", sans-serif;" : " sans-serif;"};
  color: ${(props) => (props.color ? props.color : "RGB(167, 114, 125)")};
`;
