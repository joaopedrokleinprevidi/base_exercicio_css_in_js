import { ThemeProvider } from "styled-components";
import Header from "./components/Cabecalho";
import Hero from "./components/Hero";
import ListaVagas from "./containers/ListaVagas";
import { EstiloGlobal } from "./global";

const theme = {
  corPrincipal: "RGB(167, 114, 125)",
  corSecundaria: "RGB(249, 245, 231)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  );
}

export default App;
