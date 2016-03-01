"use strict"

class Crawl extends React.Component {

  constructor(props) {
    super();
    this.state = {
      price: null
    }
  }

  componentDidMount() {
    var bars = this.props.crawl.hops
    var prices = [];
    for (var i = 0; i < bars.length; i++) {
      if (bars[i].price !== null) {
        prices.push(bars[i].price);
      }
    }
    this.setState({price: Math.round(((prices.reduce ( (prev, curr) => prev + curr )) / (prices.length)))})
  }

  expandCrawl(e) {
    if (e.target.tagName === 'A') return;
    // if (this.props.expanded === this.props.crawl.id)
    if (this.props.expanded) {
      this.props.setExpanded(null)
    } else {
      this.props.setExpanded(this.props.crawl.id)
    }
  }

  render () {
    var self = this;
    var crawl = this.props.crawl;
    return (
      <div className="row border" onClick={this.expandCrawl.bind(this)}>
        <div className="crawlList-flex">
          <div className="crawlList-rows"><h4><a className="crawl-name" href={"/crawls/" + crawl.id}>{crawl.name}</a></h4></div>
          <div className="crawlList-rows">{crawl.start_address}</div>
          <div className="crawlList-rows tags-flex">

            { this.props.tags.map(function(tag) {
              return (
                <div className="tags-list" key={tag.name}>#{tag.name}</div>
              )
            })}

          </div>
        </div>
        <div>

          <ReactCSSTransitionGroup
            className="details"
            component="div"
            transitionName="details"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={100}
          >

              {this.props.expanded ?<CrawlDetails key={ crawl.id } crawl= { crawl } hops={ crawl.hops } tags={ crawl.tags } price={ this.state.price }/> : null }
           </ReactCSSTransitionGroup>

        </div>
      </div>

    )
  }
}
