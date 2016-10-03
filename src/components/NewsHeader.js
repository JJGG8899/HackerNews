import React, { Component } from 'react'
import $ from 'jquery'
import _ from 'lodash'

class NewsHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: 'www.youku.com',
      score: 99,
      by: 'Justin',
      time: 1419737448,
      rank:1
    }
  }
  getLogo(){
    return(
      <div className = "newsHeader-logo">
        <a href='#'>
          <img src="./img/y18.gif" />
        </a>
      </div>
    )
  }
  getTitle(){
    return(
      <div className = "newsHeader-title">
        <a href='#'>
          <a className="newsHeader-textLink" href="#">Hacker News</a>
        </a>
      </div>
    )
  }
  getNav(){
    var navLinks = [
      {
        name: 'new',
        url: 'newest'
      },
      {
        name: 'comments',
        url: 'newcomments'
      },
      {
        name: 'show',
        url: 'show'
      },
      {
        name: 'ask',
        url: 'ask'
      },
      {
        name: 'jobs',
        url: 'jobs'
      },
      {
        name: 'submit',
        url: 'submit'
      }
    ]
    return(
      <div className = "newsHeader-nav">
        {
          navLinks.map((navLink) =>{
            return(
              <a key = {navLink.url}
                className = "newsHeader-navLink newsHeader-textLink"
                href="#">
                {navLink.name}
              </a>
            )
          })
        }
      </div>
    )
  }
  getLogin(){
    return (
      <div className="newsHeader-login">
        <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?whence=news">login</a>
      </div>
    );
  }
  render() {
    return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
        {this.getLogin()}
      </div>
    );
  }
}

export default NewsHeader;
