import { FormEvent, useState } from "react"
import { BotaoPesquisar, Form, InputCampo } from "./formVagas"

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>("")

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <InputCampo
        as="input"
        type="search"
        placeholder="Front-end, fullstack, node, design"
        onChange={e => setTermo(e.target.value)}
      ></InputCampo>

      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Form>
  )
}
export default FormVagas
