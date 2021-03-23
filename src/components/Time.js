import React  from 'react'
import BotaoGol from './BotaoGol'

export default class Time extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.nome}</h2>
                <h4>{this.props.gols}</h4>
                <BotaoGol marcarGol={this.props.marcarGol}/>
            </div>
        )
    }
}
