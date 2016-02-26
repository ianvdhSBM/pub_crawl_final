class CrawlsIndex extends React.Component {

  constructor(props) {
    super();
    this.setExpanded = this.setExpanded.bind(this);
    var markers = [];
    for(var i = 0; i < props.crawls.length; i++){
      markers.push({
        lat: props.crawls[i].hops[0].lat,
        lng: props.crawls[i].hops[0].lng,
        title: props.crawls[i].name
      });
    }
    this.state = {
      crawls: props.crawls,
      expanded: null,
      mapCoordinates: {
        lat: 43.645425,
        lng: -79.395020
      },
      markers: markers
    }
  }

  setExpanded(id) {
    var crawl = this.state.crawls.filter(function(c){
      return c.id === id;
    });
    var markers = [];
    for(var i = 0; i < crawl[0].hops.length; i++){
      markers.push({
        lat: crawl[0].hops[i].lat,
        lng: crawl[0].hops[i].lng,
        title: crawl[0].hops[i].name
      });
    }
    this.setState({
      expanded: id,
      markers: markers
    });
  }

  render () {
    var self = this;
    return (
      <div className="container page-wrapper">
        <Map lat={ this.state.mapCoordinates.lat } lng={ this.state.mapCoordinates.lng }
        markers={ this.state.markers }/>
        <Description />
        <h1>hops.</h1>
          <CrawlsList crawls={ this.state.crawls } setExpanded={ self.setExpanded }
          expanded={ this.state.expanded }/>
      </div>
    )
  }
}
