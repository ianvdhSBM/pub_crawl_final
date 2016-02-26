"use strict"

class Crawl extends React.Component {

  constructor(props) {
    super();
    // this.setAveragePrice = this.setAveragePrice.bind(this);
    this.state = {
      crawl: props.crawl,
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

    if (this.props.expanded === this.state.crawl.id) {
      this.props.setExpanded(null)
    } else {
      this.props.setExpanded(this.state.crawl.id)
    }
  }

  render () {
    var self = this;
    var crawl = this.state.crawl;
    return (
      <div className="row border" onClick={this.expandCrawl.bind(this)}>
        <div className="crawlList-flex">
          <div className="crawlList-rows"><h4>{crawl.name}</h4></div>
          <div className="crawlList-rows">{crawl.start_address}</div>
          <div className="crawlList-rows tags-flex">

            { this.props.tags.map(function(tag) {
              return (
                <div className="tags-list" key={tag.id}>#{tag.name}</div>
              )
            })}

          </div>
        </div>
        <div>
          {this.props.expanded === crawl.id ?
            <ReactCSSTransitionGroup
            className="details"
            component="div"
            transitionName="details"
            // transitionAppear={true}
            // transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <CrawlDetails key={ crawl.id } crawl= { crawl } hops={ crawl.hops } tags={ crawl.tags } price={ this.state.price }/>
          </ReactCSSTransitionGroup> : null }
        </div>
      </div>

    )
  }
}


        // <div className="tags-flex">
        //   { this.props.tags.map(function(tag) {
        //     return (
        //       <div className="tags-list" key={tag.id}>#{tag.name}</div>
        //     )
        //   })}
        // </div>