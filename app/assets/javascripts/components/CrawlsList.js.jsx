var CrawlsList = React.createClass({
  getInitialState: function() {
    return {
      crawls: this.props.crawls,
      // bars: this.props.bars
    }
  },

  render: function() {
    var bars = this.props.bars;

    return (
      <div className="container">
        <div className="row">

            <h1>Crawls</h1>
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
    );
  }
});


