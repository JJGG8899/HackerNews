import React, { Component } from 'react'
import $ from 'jquery'
import url from 'url'
import moment from 'moment'

class NewsItem extends Component {
  getDomain(){
    return url.parse(this.props.item.url).pathname
  }
  getSubtext(){
    return(
      <div className = "newsItem-subtext">
        {this.props.item.score} points by
        <a href="#">
          {this.props.item.by}
        </a>
        {moment.utc(this.props.item.time * 1000).fromNow()}
      </div>
    )
  }
  getTitle(){
    return(
      <div>
        <a className = "newsItem-titleLink"
            href="#">
          {this.props.item.title}
        </a>
        <span className = "newsItem-domain">
          ({this.getDomain()})
        </span>
      </div>
    )
  }
  getRank(){
    return(
      <div className="newsItem-rank">
        {this.props.rank}.
      </div>
    )
  }
  getVote(){
    return (
      <div className="newsItem-vote">
        <a href='#'>
          <img src="./img/grayarrow2x.gif" width="10"/>
        </a>
      </div>
    );
  }
  render() {
    var domain = this.getDomain()
    return (
      <div className="newsItem">
        {this.getRank()}
        {this.getVote()}
        <div className="newsItem-itemText">
          {this.getTitle()}
          {this.getSubtext()}
        </div>
      </div>
    );
  }
}

export default NewsItem;
