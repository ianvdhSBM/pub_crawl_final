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
      <section>
        <tr onClick={this.expandCrawl}>
          <td>{crawl.name}</td>
          <td>{crawl.start_address}</td>
          <td>{crawl.description}</td>
        </tr>
        <tr>
          {this.state.details ? <CrawlDetails key={ crawl.id } hops={ crawl.hops } /> : null}
        </tr>
      </section>  
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