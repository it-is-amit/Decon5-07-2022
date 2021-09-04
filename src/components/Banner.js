import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let {title, description, imageurl, content , newsurl} = this.props;
        return (
            <div className="bannerCustomCss col-md-12 m-auto mt-4">
                <div className="bannerContent">
                    <div className="bannerText">
                        <h1 className="bannerHeading">{title}</h1>
                        <p className="bannerPara">{description}</p>
                        <p className="content">{content}</p>
                        <a href = {newsurl} target= "_blank" rel="noreferrer" className= "btn m-2 btn-sm btn-outline-light">Read more</a>
                    </div>
                </div>
                <img src={imageurl} alt="newspic" className="bannerImage" />
            </div>
        )
    }
}
