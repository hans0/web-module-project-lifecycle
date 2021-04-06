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
    follower_urls: [],
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

  handleChange = e => {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        console.log(res);
        this.setState({
          user: res.data,
          follower_urls: [],
          followers: []
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSeeFollowers = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => {
        console.log(res);
        this.setState({follower_urls: []})
        const result = [];
        res.data.map((f) => {
          // this.state.follower_urls.push(f.url);
          result.push(f.url);
        });
        console.log(result);
        this.setState({follower_urls: result})
        // this.state.followers_url.map((f_url) => {
        //   axios.get(f_url)
        //     .then((res) => {
        //       console.log(res.data);
        //     });
        // });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  // componentDidUpdate() {
  //   this.state.followers_url.map((f_url) => {
  //     axios.get(f_url)
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //   });
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log(prevProps);
    console.log(this.props);
    console.log(prevState);
    console.log(this.state);
    if (prevState.follower_urls !== this.state.follower_urls){
      const result = [];
      this.state.follower_urls.map((f_url) => {
        axios.get(f_url)
          .then((res) => {
            console.log(res);
            result.push(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      this.setState({followers: result})
    }
  }


  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={lambdalogo} alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src={githublogo} alt="GitHub Logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.username} onChange={this.handleChange}/>
          <button >Search</button>
        </form>
        {this.state.user? <GithubCard user={this.state.user}/> : <></>}
        <button onClick={this.handleSeeFollowers}>See Followers</button>
        {this.state.followers ?
          this.state.followers.map((follower) => {
            <GithubCard user={follower} />
          }) 
        : <>Loading</>}
      </div>
    );
  }
}

export default App;
