var Crawls = React.createClass({
  getInitialState: function() {
    return {
      crawls: this.props.crawls,
      // bars: this.props.bars
    }
  },

  render: function() {
    var self = this;
    var bars = this.props.bars;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Crawls</h1>
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
    );
  }
});