import React from "react";
import Time from "./Time";
import Partida from "./Partida";

export default class PlacarContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            casa: 0,
            visitante: 0,
        }
    }

    addGolCasa(){
        this.setState({
            casa: this.state.casa +1,
        })
    }
        addGolVisitante(){
        this.setState({
            visitante: this.state.visitante +1,
        })
    }

  render() {

    const {partida, casa, visitante} = this.props;
    const style = {float: "left", marginRight: "10px"}
    return (
      <div>
        <div>
          <div style={style}>
            <Time nome={casa.nome} gols={this.state.casa} marcarGol={this.addGolCasa.bind(this)} />
          </div>

          <div style={style}>
            <Partida {...partida} />
          </div>

          <div style={style}>
            <Time  nome={visitante.nome} gols={this.state.visitante} marcarGol={this.addGolVisitante.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
