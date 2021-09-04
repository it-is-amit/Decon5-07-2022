import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageurl , newsurl} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageurl} alt="newspic" className="image" />
                    <h2 className="heading">{title}...</h2>
                    <p className="para">{description}...</p>
                    <a href = {newsurl} target= "_blank" rel="noreferrer" className= "btn m-2 btn-sm btn-outline-dark">Read more</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
