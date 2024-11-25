import React from 'react'

const NewsItems =(props)=> {
    let {title,description,imgUrl,NewsUrl}=props;
    return (
      <div>
        
        <div className="card">
  <img src={imgUrl?imgUrl:"https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"} className="card-img-top" style={{'aspectRatio':'2/1'}} alt="..."/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title" style={{'height':'5rem'}}>{title}</h5>
    <p className="card-text" style={{'height':'5rem'}}>{description}</p>
    <a href={NewsUrl} target='_blanck' className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
}
export default NewsItems;