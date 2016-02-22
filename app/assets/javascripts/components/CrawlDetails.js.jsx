var CrawlDetails = React.createClass({

getInitialState: function() {
  return {
    hops: this.props.hops
  }
  
},

render: function() {
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

});