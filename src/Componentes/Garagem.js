import Carro from "./Carro";

function Garagem(props) {
  console.log(props)
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}>Mensagem</button>

      <Carro 
      nome={"Mobi"}
      cor={"Vermelho"}
      ano={2022}
      flex={"True"}
      adicionadoPor={props.nome}
      />
      <Carro 
      nome={"Civic"}
      cor={"Prata"}
      ano={2019}
      flex={"False"}
      adicionadoPor={props.nome}
      />
      <Carro 
      nome={"Ka"}
      cor={"Preto"}
      ano={2020}
      flex={"False"}
      adicionadoPor={props.nome}
      />
      <Carro 
      nome={"Kwid"}
      cor={"Branco"}
      ano={2022}
      flex={"True"}
      adicionadoPor={props.nome}
      />
    </div>
  );
}

export default Garagem;
