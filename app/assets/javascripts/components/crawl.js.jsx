var Crawl = React.createClass({
  getInitialState: function() {
    return {
      crawl: this.props.crawl,
      hops: this.props.hops,
      details: false
    }
  },

  expandCrawl: function() {
    this.setState({details: !this.state.details})
  },

  render: function() {
    var crawl = this.state.crawl

    return (
      <div className="row border" onClick={this.expandCrawl} >
        {/* <div className="col-md-8" > */}
          <div className="crawlList-flex">
            <div className="crawlList-rows"><h4>{crawl.name}</h4></div>
            <div className="crawlList-rows">{crawl.start_address}</div>
            <div className="crawlList-rows">{crawl.description}</div>
          </div>

            {this.state.details ? <CrawlDetails key={ crawl.id } crawl= {crawl} hops={ crawl.hops } /> : null}

        {/* </div> */}
      </div>
    )
  }
});

// <tr>
//   <td>{this.props.crawl.name}</td>
//   <td>{this.props.crawl.start_address}</td>
//   <td>{this.props.crawl.hops[0].name}</td>
// </tr>
// <tr>
//   { this.props.crawl.hops.map(function(hop) {
//     <td>{hop.name}</td>

//     })
//   }
// </tr>