import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Banner from './components/Banner';

export default class App extends Component {

  articles =  [
    {
    "source": {
    "id": null,
    "name": "Quartz India"
    },
    "author": "Tim Fernholz",
    "title": "Elon Musk’s new satellites could sneak internet past the Taliban",
    "description": "Laser-equipped satellites could help beat digital repression.",
    "url": "https://qz.com/2054920/elon-musks-new-satellites-could-sneak-internet-past-the-taliban/",
    "urlToImage": "https://cms.qz.com/wp-content/uploads/2021/09/Elon-Musk-Starlink-Taliban-dissident-Cuba-Iran-North-Korea-satellite-internet-broadband.jpg?quality=75&strip=all&w=1200&h=630&crop=1",
    "publishedAt": "2021-09-02T18:49:23Z",
    "content": "Today, SpaceX and other satellite internet providers cant easily sneak internet access into repressive countries with their permissionthe technical and legal challenges are too difficult. But a new g…"
    }
    ]

    constructor(){
        super();
        console.log("Hello I am constructor");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

  render() {
    return (
      <div>

        <Navbar/>

        {this.state.articles.map((element)=>{
          return <Banner title={element.title} description={element.description} content={element.content} imageurl={element.urlToImage}/>
        })}

        <News/>
        
      </div>
    )
  }
}
