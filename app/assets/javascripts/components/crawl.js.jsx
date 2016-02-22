var Crawl = React.createClass({
  getInitialState: function() {
    return {
      crawl: this.props.crawl,
      bars: this.props.bars
    }
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.crawl.name}</td>
        <td>{this.props.crawl.bars[0].address}</td>
        <td>{this.props.crawl.description}</td>
      </tr>
    )
  }
})
