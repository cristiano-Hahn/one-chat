import React from 'react';
import './App.css'
import { ReactComponent as ReactLogo } from './images/send.svg'
import MyMessage from './components/MyMessage';
import OtherMessage from './components/OtherMessage';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.send = this.send.bind(this)
    this.onKeyDownSend = this.onKeyDownSend.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)

    this.state = {
      messages: [
        { author: 'Moisés', message: "Olá, eu sou goku!", me: false },
        { author: 'Maxforce', message: "Mentira!", me: true }
      ],
      newMessage: ''
    }
  }

  send() {
    const { messages, newMessage } = this.state
    if (newMessage && newMessage.trim()) {
      this.setState({
        messages: [...messages, { author: 'Maxforce', message: newMessage, me: true }],
        newMessage: ''
      }, () => this.scrollToBottom())
    }


  }

  onKeyDownSend(e) {
    if (e.key === 'Enter') {
      this.send()
    }
  }

  scrollToBottom() {
    const messages = document.getElementById("messages");
    messages.scrollTop = messages.scrollHeight;
  }

  render() {
    const { messages, newMessage } = this.state

    return (
      <div className="App">
        <div className='main-screen'>
          <div className='topbar'>
            <div className="online-icon" />
            <div className='username'>
              Maxforce
            </div>
          </div>
          <div id='messages' className='messages'>

            {messages.map(item => {
              return (
                item.me ?
                  <MyMessage
                    title='Eu disse'
                    message={item.message}
                  /> :
                  <OtherMessage
                    title={`${item.author} disse:`}
                    message={item.message}
                  />
              )
            })}
          </div>
          <div className='send-message'>
            <input
              placeholder="Digite algo para enviar"
              value={newMessage}
              onChange={e => this.setState({ newMessage: e.target.value })}
              onKeyDown={this.onKeyDownSend}
            />
            <button
              onClick={this.send}
            >
              <ReactLogo />
            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
