import React, { Component } from 'react'
import _ from 'lodash'
import NewsHeader from './NewsHeader'
import NewsItem from './NewsItem'
import items from '../../json/items.json'

class NewsList extends Component {
  getMore(){
    return(
      <div className = "newslist-more">
        <a className = "newsList-moreLink"
            href="https://news.ycombinator.com/news?p=2">
          More
        </a>
      </div>
    )
  }
  render() {
    console.log(items)
    return(
      <div className = "newsList">
        <NewsHeader />
        <div className = "newsList-newsItems">
          {
            items.map((item, index) =>{
              return <NewsItem key = {item.id}
                        item = {item}
                        rank = {index + 1} />
            })
          }
        </div>
        {this.getMore()}
      </div>
    )
  }
}

export default NewsList;
