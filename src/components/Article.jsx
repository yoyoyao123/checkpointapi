import React from 'react'
import { Link } from 'react-router-dom';

function Article(props) {
  return (
    
        <div className="card card-manage" style={{width: "18rem"}}>
            <div className="card-content-manage">
                <div className="img-container">
                    <img src={props.article.image} className="card-img-top" alt="..."/>
                </div>
            </div>
                <div className="card-body">
                    <h5 className="card-title">{props.article.title.substring(0, 20)}</h5>
                    <p className="card-text">{props.article.description.substring(0, 30)}</p>
                    <Link to={`detail/${props.article.id}`} className="btn btn-primary">Details</Link>
                </div>
        
        </div>
 
  )
}

export default Article

