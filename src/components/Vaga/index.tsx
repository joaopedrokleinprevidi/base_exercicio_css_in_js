import { Link, ListaLI, Titulo } from "./styles";

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <ListaLI>
    <Titulo fontWeight="bold" marginBottom={16}>
      {props.titulo}
    </Titulo>
    <ul>
      <ListaLI>Localizacao: {props.localizacao}</ListaLI>
      <ListaLI>Senioridade: {props.nivel}</ListaLI>
      <ListaLI>Tipo de contratacao: {props.modalidade}</ListaLI>
      <ListaLI>
        Salário: {props.salarioMin} - {props.salarioMax}
      </ListaLI>
      <ListaLI>Requisitos: {props.requisitos.join(", ")}</ListaLI>
    </ul>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </ListaLI>
);

export default Vaga;
