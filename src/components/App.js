import React from "react";
import Contador from "./contador";
import PlacarContainer from "./PlacarContainer";
import "../src/main.scss";

const dadosPartida = {
  partida: {
    estadio: "Mineritão",
    data: "16/02/2021",
    hora: "22:16",
  },
  casa: {
    nome: "Cruzeiro",
  },
  visitante: {
    nome: "Atletico",
  },
};
class App extends React.Component {
  render() {
    const style = {backgroundColor: '#0055'}
    return (
      <div>
        <div style={style}>
        <button type="button" className="btn btn-primary">Primary</button>
        </div>
        <h2>PROJETO CONTADOR NUMÉRICO</h2>
        <Contador />
        <hr></hr>

        <h2>PROJETO PLACAR DE FUTEBOL</h2>
        <PlacarContainer {...dadosPartida} visitante={dadosPartida.visitante}
        />
      </div>
    );
  }
}

export default App;
