import { EstiloDoCabecalho } from "./styles";
import { Texto } from "../Texto";

const Header = () => (
  <EstiloDoCabecalho>
    <Texto fontSize={32} color={"#000"}>
      Ebac Jobs
    </Texto>
  </EstiloDoCabecalho>
);

export default Header;
