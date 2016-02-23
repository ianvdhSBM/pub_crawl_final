class CrawlDetails extends React.Component {

  constructor(props) {
    super();
    this.state = {
      hops: props.hops
    }
  }

  render () {
    var hops = this.state.hops
    return (
      <div className="crawlList-flex">
      <div className="hops-list">
        <ol>
          { hops.map(function(hop) {
            return (
              <li key={hop.id} ><a target="_blank" href={hop.website}>{hop.name}</a>, {hop.address}, {hop.city}, {hop.province}</li>
              )
            })
          }
        </ol>
      </div>
      <div>
        <h2>Details</h2>

      </div>
    </div>
    )
  }
}

