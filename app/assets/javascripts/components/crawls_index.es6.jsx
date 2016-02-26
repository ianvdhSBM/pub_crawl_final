class CrawlsIndex extends React.Component {

  constructor(props) {
    super();
    this.setExpanded = this.setExpanded.bind(this);

    var markers = this.setDefaultMarkers(props.crawls)

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

  setDefaultMarkers(crawls) {
    // var crawls = this.props.crawls;
    var markers = [];
    for(var i = 0; i < crawls.length; i++){
      markers.push({
        lat: crawls[i].hops[0].lat,
        lng: crawls[i].hops[0].lng,
        title: crawls[i].name
      });
    }
    return markers;
  }

  setExpanded(id) {
    if (id === null) {
      var markers = this.setDefaultMarkers(this.state.crawls);
      this.setState({
        expanded: id,
        markers: markers
      });
    } else {
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
  }

  render () {
    var self = this;
    return (
      <div id="outermost">
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} markers={ this.state.markers }/>
        <div className="container page-wrapper">
          <Description />
          <h1>hops.</h1>
            <CrawlsList crawls={ this.state.crawls } tags={ this.props.tags } setExpanded={ self.setExpanded } expanded={ this.state.expanded }/>
        </div>
      </div>
    )
  }
}




