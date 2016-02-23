var Bar = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      address: '',
      city: '',
      province: '',
      phone_number: '',
      website: ''
    }
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.bar.name}</td>
        <td>{this.props.bar.address}, {this.props.bar.city}, {this.props.bar.province}</td>
        <td>{this.props.bar.phone_number}</td>
      </tr>
    )
  }
})

