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
      <ol>
        { hops.map(function(hop) {
          return (
            <li><a target="_blank" href={hop.website}>{hop.name}</a>, {hop.address}, {hop.city}, {hop.province}</li>
            )
          }) 
        }  
      </ol>
    )
  }
}

