class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      crawls: props.crawls,
      mapCoordinates: {
        lat: 43.645425,
        lng: -79.395020
      }
    }
  }

  render () {

    return (
      <div className="container">
          <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
          <CrawlsList crawls={ this.state.crawls } />
      </div>
    )

  }

}
