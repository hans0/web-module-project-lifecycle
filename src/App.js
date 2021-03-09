import React from 'react';
import axios from 'axios';

import GithubCard from './components/GithubCard';
import GithubCardList from './components/GithubCardList';
import githublogo from './images/githublogo.png';
import lambdalogo from './images/lambdalogo.png';
import './App.css';

const errorUser = {
  avatar_url: githublogo,
  bio: 'ERROR', 
  login: 'ERROR',
  location: 'ERROR', 
  html_url: 'https://github.com',
  followers: 'N/A',
  following: 'N/A',
  name: 'ERROR'
}

class App extends React.Component  {
  
  state = {
    currentUser: 'hans0',
    data: []
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then((res) => {
        this.setState({...this.state, data: res.data});
        console.log(this.state.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({
      currentUser: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then((res) => {
      this.setState({...this.state, data: res.data});
    })
    .catch((err) => {
      this.setState({...this.state, data: errorUser})
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lambdalogo} />
          <p>❤️s</p>
          <img src={githublogo} />
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            />
          <button>Search</button>
        </form>
        <GithubCard data={this.state.data}/>
        {/* point of expansion, don't know whether to just add all the results, or get the followers below the user */}
        {/* <GithubCardList /> */}
      </div>
    );
  }
}

export default App;
