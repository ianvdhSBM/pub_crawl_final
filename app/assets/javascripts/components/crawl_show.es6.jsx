class CrawlShow extends React.Component {

  constructor(props) {
    super();
    // this.setExpanded = this.setExpanded.bind(this);
    this.state = {
      crawl: props.crawl,
      // expanded: null,
      mapCoordinates: {
        lat: props.crawl.start_lat,
        lng: props.crawl.start_lng
      }
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

  render () {
    var self = this;
    var crawl = this.props.crawl
    return (
      <div className="container page-wrapper">
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>

        <h1>{crawl.name}</h1>
        <CrawlDetails key={ crawl.id } crawl= { crawl } hops={ crawl.hops } tags={ crawl.tags} price={ this.state.price }/>

      </div>
    )

  }

}


// <Crawl key={ crawl.id } crawl={ crawl } tags={ crawl.tags } />