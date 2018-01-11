import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

class JyankenGamePage extends Component {
  constructor(props){
    super(props)
      this.state = {human: null, computer: null}
  }
  pon(human_hand){
    const computer_hand = Math.floor(Math.random()*3)
      this.setState({human: human_hand, computer: computer_hand})
  }
  judge(){
    if (this.state.human == null){
      return null
    }else{
      return (this.state.computer - this.state.human + 3) % 3
    }
  }
  render(){
    return(
        <div>
          <h1>じゃんけんポン</h1>
          <JyankenBox actionPon= {(te) => this.pon(te)} />
          <ScoreBox human={this.state.human} computer={this.state.computer}judgement={this.judge()} />
        </div>

    )
  }
}

const JyankenBox = (props) => {
  return(
      <div>
        <button onClick={() => props.actionPon(0)}>グー</button>
        <button onClick={() => props.actionPon(1)}>チョキ</button>
        <button onClick={() => props.actionPon(2)}>パー</button>
      </div>
      )
}
JyankenBox.propTypes = {
  actionPon: PropTypes.func
}

const ScoreBox = (props) => {
  const teString = ["グー","チョキ","パー"]
    const judgementString = ["引き分け","勝ち","負け"]
    return(
        <table>
          <tbody>
            <tr>
              <th>あなた</th>
              <td>{teString[props.human]}</td>
            </tr>
            <tr>
              <th>Computer</th>
              <td>{teString[props.computer]}</td>
            </tr>
            <tr>
              <th>勝負</th>
              <td>{judgementString[props.judgement]}</td>
            </tr>
          </tbody>
        </table>
        )
}

ScoreBox.propTypes = {
  human: PropTypes.number,
  computer: PropTypes.number,
  judgement: PropTypes.number,
}

ReactDOM.render(
    <JyankenGamePage />,
    document.getElementById('root')
)
