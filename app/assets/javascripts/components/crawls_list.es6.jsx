class CrawlsList extends React.Component {

  constructor(props) {
    super();
    // debugger
    this.state = {
      crawls: props.crawls
    }
  }

  render () {
    var self = this;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Hops</h1>
            <Filters />
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start Address</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                { this.props.crawls.map(function(crawl) {
                  return (
                    <Crawl key={ crawl.id } crawl={ crawl } bars={ crawl.bars } />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

