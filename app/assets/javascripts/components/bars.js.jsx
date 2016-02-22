var Bars = React.createClass({
  getInitialState: function() {
    return {
      bars: this.props.bars
    }
  },

  // setBar: function() {
  //   if (this.state.bars.length > 1) {
  //     var bars = this.state.bars
  //   }
  //   else {
  //     var bars = this.state.bars[0]
  //   }
  // },

  render: function() {
    var self = this;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Please Show Up</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                { this.state.bars.map(function(bar) {
                  return (
                    <Bar key={ bar.id } bar={ bar } />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});