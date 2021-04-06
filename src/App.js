import logo from './logo.svg';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';
import './App.css';
import React from 'react';
import axios from 'axios';

import GithubCard from './components/GithubCard';

class App extends React.Component {
  state = {
    username: 'hans0',
    user: {},
    followers: []
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({user: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
      
  }


  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={lambdalogo} alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src={githublogo} alt="GitHub Logo" />
        </div>
        <form>
          <input value={this.state.username} />
          <button >Search</button>
        </form>
        {this.state.user? <GithubCard user={this.state.user}/> : <></>}

      </div>
    );
  }
}

export default App;
