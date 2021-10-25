// import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
       let {title, description, imageurl,newsUrl,author, date,source}=this.props;
        return (
            <div className="my-3">
                <div className="card" >
                <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
                 <img src={!imageurl?"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-p3pu6l9r3p5ir2gqajjmr43o34-20180926161508.Medi.jpeg":imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                 <h5 className="card-title">{title} </h5>  
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
                 <a rel="noreferrer" href={newsUrl} target="_blank" className=" btn btn-sm  btn-dark">Read More</a>
                </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
