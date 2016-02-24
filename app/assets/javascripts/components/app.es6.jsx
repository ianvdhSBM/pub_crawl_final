class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      crawls: props.crawls
    }
  }

  render () {

    return (
      <div className="container">
          <CrawlsList crawls={ this.state.crawls } />
      </div>
    )

  }

}