class CrawlForm extends React.Component {
  constructor(){
    super()
    this.state = {
      crawl: {
        name: "",
        description: "",
        bar_names: [""]
      }
    }
  }

  addBar(){
    var crawl = this.state.crawl;
    crawl.bar_names.push("");
    this.setState({crawl: crawl});
  }

  autocomplete(e, index){
    var length = e.target.value.length;
    if(length > 3){
      if(length % 2 == 0){
        console.log(index);
      }
    }
  }

  onBarNameChange(e, index){
    var crawl = this.state.crawl;
    crawl.bar_names[index] = e.target.value;
    this.setState({crawl: crawl})
  }

  onBarRemove(index){
    var crawl = this.state.crawl;
    crawl.bar_names.splice(index, 1);
    this.setState({crawl: crawl});
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

  handleSubmit(e) {
    e.preventDefault();
    data = {
      crawl: {}
    }
    data.crawl = this.state.crawl;
    $.ajax({
      url: "/crawls/",
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        window.location.pathname = data.location;
      }.bind(this),
      error: function(xhr, status, err) {
        var message = JSON.parse(xhr.responseText);
        console.log(message.message);
      }.bind(this)
    });
  }

  render () {
    var self = this;
    var barsArray = this.state.crawl.bar_names.map((bar, index) => {
          return (
            <div className="input-group" >
              <input key={index} type="text" className="form-control" placeholder={"Bar " + (index + 1)}
              defaultValue={bar} onChange={(e) => this.onBarNameChange(e, index)} onKeyUp={(e) => this.autocomplete(e, index)}/>
              {(() => {
                if(index > 0){
                  return (
                    <span className="input-group-btn">
                      <button type="button" onClick={() => this.onBarRemove(index)} className="btn btn-default">X</button>
                    </span>
                  )
                }
                else{
                  return <span className="input-group-addon" id="sizing-addon1">&nbsp;</span>
                }
              })()}
            </div>
          )
        })

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
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

