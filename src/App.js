import React, { Component } from 'react';
import axios from 'axios';
import './App.css'


  

class App extends Component {



  constructor() {
    super();
    this.state = {
      judul: '',
    };
  }

  componentDidMount() {
    axios({
      url: 'https://icanhazdadjoke.com',
      headers: { Accept: 'application/json' },
    }).then((ambilData) => {
      console.log(ambilData);
      this.setState({
        status: ambilData.status,
        joke: ambilData.data.joke,
      })
    })
  };


  render() {
    return (
      <div>

        <div className="card text-center">
          <div className="card-header">
            JOKES BAPAK-BAPAK
        </div>
          <div className="card-body">
            <p className="card-text" id="joke">{this.state.joke}</p>
            <button onClick={() => window.location.reload(false)} className="btn btn-primary" id="get_joke" >Get Another Joke</button>
          </div>
          <div className="card-footer text-muted">
            Receh...
        </div>
        </div>
      </div>
    );
  }
}
export default App;