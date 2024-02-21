import { Paragrafo as EstiloDoParagrafo, Props } from "./styles";

export const Texto = (props: Props) => {
  return (
    <EstiloDoParagrafo fontSize={props.fontSize} color={props.color}>
      {props.children}
    </EstiloDoParagrafo>
  );
};
