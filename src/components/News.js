import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =  []

    constructor(){
        super();
        console.log("Hello I am constructor");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=deabc1fdc4df4199b5d33bffa97187a5";
  
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
      }



    render() {
        return (
            <div className="container my-3">
               <div className="row">
                    {this.state.articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
               })}
                </div> 
            </div>
        )
    }
}

export default News
