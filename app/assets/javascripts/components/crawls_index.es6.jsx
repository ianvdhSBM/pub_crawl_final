class CrawlsIndex extends React.Component {

  constructor(props) {
    super();
    this.setExpanded = this.setExpanded.bind(this);
    this.state = {
      crawls: props.crawls,
      expanded: null,
      mapCoordinates: {
        lat: 43.645425,
        lng: -79.395020
      }
    }
  }

  setExpanded(id) {
    this.setState({expanded: id})
  }

  render () {
    var self = this;
    return (
      <div id="outermost">
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>
        <div className="container page-wrapper">
          <Description />
          <h1>hops.</h1>
            <CrawlsList crawls={ this.state.crawls } setExpanded={ self.setExpanded } expanded={ this.state.expanded }/>
        </div>
      </div>
    )

  }

}