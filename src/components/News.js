import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropType from 'prop-types'
export default class News extends Component {
  static defaultProps={
    country:'us',
    pagesize:12,
    category:'general',
  }
  static propType={
    country: PropType.string,
    pagesize:PropType.number,
    category:PropType.string
  }
  constructor(){
    super();
    this.state={
    articles:[],
    page:1,
  }
  }
  async updateNews(){
    this.props.setProgress(10);
    this.setState({loading:true});
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=170a880ee94f4d0b82bf58138efe3211&pagesize=${this.props.pagesize}&page=${this.props.page}`;
    const data=await fetch(url);
    this.props.setProgress(30);
    const parsedData=await data.json();
    this.props.setProgress(60);
    this.setState({articles:parsedData.articles,total :parsedData.totalResults,loading:false});
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews();
  }
  prevClick=async ()=>{
    this.updateNews();
    this.setState({page:this.state.page-1});
  }
  nextClick=async ()=>{
    if (this.state.page+1>Math.ceil(this.state.total/12)) {
      
    } else {
      this.updateNews();
      this.setState({page:this.state.page+1});
    }
  }
  render() {
    return (
      <>
      <div className='container my-3'>
        <h2>Headlines</h2>
        {this.state.loading && <Loading/>}
        <div className='row'>
            {!this.state.loading &&this.state.articles && this.state.articles.map((element)=>{
              return <div className='col-md-4 my-3' key={element.url}>
              <NewsItems title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} NewsUrl={element.url}/>
              </div>
            })}
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.prevClick} className="btn btn-success">&larr; Prev</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.total/12)}onClick={this.nextClick} className="btn btn-primary">Next &rarr;</button>
        </div>
        </div>
      </>
    )
  }
}