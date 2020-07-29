import React from 'react';
import './App.css'
import { ReactComponent as ReactLogo } from './images/send.svg'
import MyMessage from './components/MyMessage';
import OtherMessage from './components/OtherMessage';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [
        { author: 'Moisés', message: "Olá, eu sou goku!", me: false },
        { author: 'Maxforce', message: "Mentira!", me: true }
      ]
    }
  }


  render() {
    const { messages } = this.state

    return (
      <div className="App">
        <div className='main-screen'>
          <div className='topbar'>
            <div className="online-icon" />
            <div className='username'>
              Maxforce
            </div>
          </div>
          <div className='messages'>

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
            />
            <button>
              <ReactLogo />
            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
