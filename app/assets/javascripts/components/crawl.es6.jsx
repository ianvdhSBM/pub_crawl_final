class Crawl extends React.Component {

  constructor(props) {
    super();
    // this.setAveragePrice = this.setAveragePrice.bind(this);
    this.state = {
      crawl: props.crawl,
      details: false,
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

    if (this.state.details === true) {
      this.setState({details: !this.state.details})
      this.props.setExpanded(null)
    }
    else {
      this.setState({details: !this.state.details})
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
          <div className="crawlList-rows">{crawl.description}</div>
        </div>

            {this.props.expanded === crawl.id ? <CrawlDetails key={ crawl.id } crawl= {crawl} hops={ crawl.hops } tags={ crawl.tags} price={ this.state.price }/> : null}

      </div>

    )
  }
}

// self.state.details
// onClick={this.expandCrawl.bind(this)
