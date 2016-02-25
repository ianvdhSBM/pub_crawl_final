class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      crawls: props.crawls
    }
  }

  render () {

    return (
      <div className="container page-wrapper">
        <Description />
        <h1>hops.</h1>
          <CrawlsList crawls={ this.state.crawls } />
      </div>
    )

  }

}