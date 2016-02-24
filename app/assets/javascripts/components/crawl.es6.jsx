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

  // setAveragePrice() {
  //   var bars = this.props.crawl.hops
  //   var prices = [];
  //   for (var i = 0; i < bars.length; i++) {
  //     if (bars[i].price !== null) {
  //       prices.push(bars[i].price);
  //     }
  //   }
  //   return avg = Math.round(((prices.reduce( (prev, curr) => prev + curr )) / (prices.length)));
  // }

  componentDidMount() {
    var bars = this.props.crawl.hops
    var prices = [];
    for (var i = 0; i < bars.length; i++) {
      if (bars[i].price !== null) {
        prices.push(bars[i].price);
      }
    }
    this.setState({price: Math.round(((prices.reduce( (prev, curr) => prev + curr )) / (prices.length)))})
  }

  expandCrawl() {
    this.setState({details: !this.state.details})
  }

  render () {
    var self = this;
    var crawl = this.state.crawl;
    return (
      <div className="row border" onClick={this.expandCrawl.bind(this)} >
        {/* <div className="col-md-8" > */}
          <div className="crawlList-flex">
            <div className="crawlList-rows"><h4>{crawl.name}</h4></div>
            <div className="crawlList-rows">{crawl.start_address}</div>
            <div className="crawlList-rows">{crawl.description}</div>
          </div>

            {self.state.details ? <CrawlDetails key={ crawl.id } crawl= {crawl} hops={ crawl.hops } tags={ crawl.tags }/> : null}

        {/* </div> */}
      </div>

    )
  }
}

      //  <section>
      //   <tr onClick={this.expandCrawl.bind(this)}>
      //     <td>{crawl.name}</td>
      //     <td>{crawl.start_address}</td>
      //     <td>{crawl.description}</td>
      //   </tr>
      //   <tr>
      //     {self.state.details ? <CrawlDetails key={ crawl.id } hops={ crawl.hops } /> : null}
      //   </tr>
      // </section>