import React from "react";

class GithubCard extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className='card'>
        <img src={this.props.user.avatar_url}/>
        <div className='card-info'>
          <div className='name'>{this.props.user.name}</div>
          <p className='username'>{this.props.user.login}</p>
          <p>Location: {this.props.user.location}</p>
          <p><a href={this.props.user.html_url}>Profile</a></p>
          <p><a href={this.props.user.html_url + '?tab=followers'}>Followers: {this.props.user.followers}</a></p>
          <p><a href={this.props.user.html_url + '?tab=following'}>Following: {this.props.user.following}</a></p>
          <p>Bio: {this.props.user.bio}</p>
        </div>
      </div>
    );
  }
}

export default GithubCard;