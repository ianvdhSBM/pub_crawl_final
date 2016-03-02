class CrawlDetails extends React.Component {

  constructor(props) {
    super();
  }

  render () {
    var user = this.props.crawl.user
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
                <li key={hop.id}><strong>{index + 1}.</strong> <a href={url}>{hop.name}</a>, {hop.address}, {hop.city}, {hop.province}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="details-description">
          <h3>description</h3>
          <p>{this.props.crawl.description}</p>
          <p><strong>Created by: </strong> <a href={"/users/" + user.id }>{user.firstname} {user.lastname}</a></p>
        </div>
      </div>
    )
  }
}

