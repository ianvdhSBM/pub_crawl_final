class BarShow extends React.Component {

  constructor(props) {
    super();
    this.setExpanded = this.setExpanded.bind(this);
    markers = [{lat: props.bar.lat, lng: props.bar.lng, title: props.bar.name}]
    this.state = {
      bar: props.bar,
      crawls: props.bar.crawls,
      expanded: null,
      mapCoordinates: {
        lat: props.bar.lat,
        lng: props.bar.lng
      },
      markers: markers
    }
  }

  setExpanded(id) {
    if (id === null) {
      // var markers = this.setDefaultMarkers(this.state.crawls);
      this.setState({
        expanded: id
        // markers: markers
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
        expanded: id
        // markers: markers
      });
    }
  }

  render() {
    var self =this;
    var bar = this.props.bar;
    var crawls = this.props.bar.crawls;
    return (
      <div id="flexbox-container-columns">
        <div id="crawls-container-flex">
          <div className="crawlList-flex">
            <div className="bar-details">
              <h2>{bar.name}</h2>
              <p><strong>Website: </strong><a target="_blank" href={bar.website}>{bar.website}</a></p>
              <p><strong>Address: </strong>{bar.address}, {bar.city}, {bar.province}</p>
              <p><strong>Phone: </strong>{ bar.phone_number ? bar.phone_number : <em>Not listed</em>}</p>
              {/* <p><strong>Average Price: </strong>{bar.price}</p> */}
            </div>
            <div>
              <h3>{bar.name}'s hop list</h3>
                <CrawlsList crawls={ crawls } tags={ this.props.tags } setExpanded={ self.setExpanded } expanded={ this.state.expanded }/>
            </div>
          </div>
        </div>
        <div id="map-flex">
          <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} markers={ this.state.markers }/>
        </div>
      </div>
    )
  }
}


