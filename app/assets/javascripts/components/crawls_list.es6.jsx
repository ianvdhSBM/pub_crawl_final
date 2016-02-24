class CrawlsList extends React.Component {

  constructor(props) {
    super();
    this.state = {
      crawls: props.crawls
    }
  }

  render () {

    return (
      <div>
        <div className="row">
          <h1>Crawls</h1>
          <Filters />

          <div className="crawlList-flex">
            <div className="crawlList-header"><h3>Name</h3></div>
            <div className="crawlList-header"><h3>Start Address</h3></div>
            <div className="crawlList-header"><h3>Description</h3></div>
          </div>
        </div>
            { this.props.crawls.map(function(crawl) {
              return (
                <Crawl key={ crawl.id } crawl={ crawl } bars={ crawl.bars } />
              )
            })}
      </div>
    )
  }
}

