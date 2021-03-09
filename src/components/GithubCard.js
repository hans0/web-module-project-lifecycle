import React from 'react';
import lambdalogo from '../images/lambdalogo.png';
// import GithubCardList from './GithubCardList';


class GithubCard extends React.Component {

  render() {
    return(
      <div className="card">
        <img src= {this.props.data.avatar_url}/>
        <div className="card-info">
          <h3 className="name">{this.props.data.name}</h3>
          <p className="username">{this.props.data.login}</p>
          <p>Location: {this.props.data.location}</p>
          <p>Profile: <a href={this.props.data.html_url}>{this.props.data.login}</a></p>
          <p>Followers: {this.props.data.followers}</p>
          <p>Following: {this.props.data.following}</p>
          <p>Biography: {this.props.data.bio}</p>
        </div>
      </div>
    );
  }
}

export default GithubCard;