import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "in",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizeFLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
    document.title = `${this.capitalizeFLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async fetchNews(page) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c09d3fb7bf646f79731c6b4bedb5002&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles || [],
      loading: false,
      totalArticles: parseData.totalResults,
      page: page,
    });
  }

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  handleNextClick = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalArticles / this.props.pageSize)
    ) {
      this.fetchNews(this.state.page + 1);
    }
  };

  handlePreClick = async () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="my-4 text-center">{`NewsMonkey - Top ${this.capitalizeFLetter(
          this.props.category
        )} Headlines`}</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                    }
                    newsUrl={element.url}
                    Author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div>
          <div className="container d-flex justify-content-between mb-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handlePreClick}
              disabled={this.state.page <= 1}
            >
              &#10218;&#10218;&#10218;&#10218; Previous
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalArticles / this.props.pageSize)
              }
            >
              Next &#10219;&#10219;&#10219;&#10219;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
