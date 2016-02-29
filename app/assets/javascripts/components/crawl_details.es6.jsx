class CrawlDetails extends React.Component {

  constructor(props) {
    super();
    this.state = {
      hops: props.hops,
      tags: props.tags
    }
  }

  render () {
    var hops = this.state.hops
    var tags = this.state.tags
    return (
      <div className="details-flex">
        <div className="hops-list">
          <h3>hop list</h3>
          <ul className="hops-list-ul">
            { hops.map(function(hop, index) {
              var url = "/bars/" + hop.id;
              return (
                <li key={hop.id}><strong>Hop #{index + 1}:</strong> <a href={url}>{hop.name}, {hop.address}, {hop.city}, {hop.province}</a></li>
                )
              })
            }
          </ul>
        </div>
        <div className="details-description">
          <h3>Decription</h3>
          <p>{this.props.crawl.description}</p>
          <p>Average Price: {this.props.price}</p>

        </div>
      </div>
    )
  }
}

