class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      crawls: props.crawls
    }
  }

  render () {

    return (
      <div className="container" id="master-div">
        <Description />
        <h1>hops.</h1>
          <CrawlsList crawls={ this.state.crawls } />
      </div>
    )

  }

}