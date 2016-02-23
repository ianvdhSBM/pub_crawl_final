class CrawlForm extends React.Component {
  constructor(){
    super()
    this.state = {
      bars: [{
        name: "",
        address: ""
      }],
      crawl: {
        name: "",
        description: ""
      }
    }
  }

  addBar(){
    var bars = this.state.bars;
    bars.push({
        name: "",
        address: ""
      });
    this.setState({bars: bars});
  }
  onBarNameChange(e, index){
    var bars = this.state.bars;
    bars[index].name = e.target.value;
    this.setState({bars: bars})
  }

  onDescChange(e){
    var crawl = this.state.crawl;
    crawl.description = e.target.value;
    this.setState({crawl: crawl})
  }

  onNameChange(e){
    var crawl = this.state.crawl;
    crawl.name = e.target.value;
    this.setState({crawl: crawl})
  }

  render () {
    var self = this;
    var barsArray = this.state.bars.map((bar, index) => {
          return (
            <div className="form-group">
              <label>Bar Name</label>
              <input key={index} className="form-control" placeholder="Bar Name"
              defaultValue={bar.name} onChange={(e) => this.onBarChange(e, index)}/>
            </div>
          )
        })

    return (
      <form >
        <div className="form-group">
          <label>Crawl Name</label>
          <input className="form-control" placeholder="Crawl Name" onChange={this.onNameChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input className="form-control" placeholder="Description" onChange={this.onDescChange.bind(this)}/>
        </div>
        {barsArray}
        <button type="button" className="btn btn-default" onClick={() => this.addBar()}>Add Bar</button>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

