function Carro(props) {
  console.log(props.cor)
  return (
    <div>
      <h2>{props.nome}</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado por: {props.adicionadoPor}</li>
      </ul>
    </div>
  );
}

export default Carro;
