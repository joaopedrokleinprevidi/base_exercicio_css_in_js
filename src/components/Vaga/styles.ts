import styled from "styled-components";
import { Texto } from "../Texto";

type PropsTitulo = {
  fontWeight?: string;
  marginBottom?: number;
};

export const ListaLI = styled.li`
  border: 1px solid ${({ theme }) => theme.corPrincipal};
  background-color: ${({ theme }) => theme.corSecundaria};
  color: ${({ theme }) => theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${({ theme }) => theme.corPrincipal};
    color: ${({ theme }) => theme.corSecundaria};
  }

  hover a {
    border-color: ${({ theme }) => theme.corPrincipal};
    background-color: ${({ theme }) => theme.corSecundaria};
    color: ${({ theme }) => theme.corPrincipal};
  }
`;

export const Titulo = styled(Texto)<PropsTitulo>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "px" : "0px"};
`;
export const Link = styled.a`
  border-color: ${({ theme }) => theme.corSecundaria};
  background-color: ${({ theme }) => theme.corPrincipal};
  color: ${({ theme }) => theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;
