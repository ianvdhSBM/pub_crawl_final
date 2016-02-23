class Crawl extends React.Component {

  constructor(props) {
    super();
    this.state = {
      crawl: props.crawl,
      details: false
    }
  }

  expandCrawl() {
    this.setState({details: !this.state.details})
  }

  render () {
    var self = this;
    var crawl = this.state.crawl;
    return ( 
      <section>
        <tr onClick={this.expandCrawl.bind(this)}>
          <td>{crawl.name}</td>
          <td>{crawl.start_address}</td>
          <td>{crawl.description}</td>
        </tr>
        <tr>
          {self.state.details ? <CrawlDetails key={ crawl.id } hops={ crawl.hops } /> : null}
        </tr>
      </section>  
    )
  }
}

