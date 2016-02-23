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
      <div className="crawlList-flex">
      <div className="hops-list">
        <ol>
          { hops.map(function(hop) {
            return (
              <li key={hop.id}><a target="_blank" href={hop.website}>{hop.name}</a>, {hop.address}, {hop.city}, {hop.province}</li>
              )
            })
          }
        </ol>
        <ul>
          { tags.map(function(tag) {
            return (
              <li key={tag.created_at}>{tag.name}</li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>Details</h2>

      </div>
    </div>
    )
  }
}

