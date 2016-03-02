class CrawlDetails extends React.Component {

  constructor(props) {
    super();
  }

  render () {
    var hops = this.props.hops
    var tags = this.props.tags
    return (
      <div className="details-flex">
        <div className="hops-list">
          <h3>bars list</h3>
          <ul className="hops-list-ul">
            { hops.map(function(hop, index) {
              var url = "/bars/" + hop.id;
              return (
                <li key={hop.id}><strong>{index + 1}.</strong><strong><a href={url}>{hop.name}</a></strong>, {hop.address}, {hop.city}, {hop.province}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="details-description">
          <h3>decription</h3>
          <p>{this.props.crawl.description}</p>
          {/* <p>Average Price: {this.props.price}</p> */}
        </div>
      </div>
    )
  }
}

