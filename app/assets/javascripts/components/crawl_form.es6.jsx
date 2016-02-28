class CrawlForm extends React.Component {
  
  constructor(){
    super()
    this.state = {
      crawl: {
        name: "",
        description: "",
        bars: [{
          name: "",
          id: null,
          lat: null,
          lng: null,
          awesomplete: null,
          attached: false
        }]
      }
    }
  }

  componentDidMount(){
    var crawl = this.state.crawl;
    var barInputs = this.getBarInputs();
    var awesomplete = new Awesomplete(barInputs[0], {
      minChars: 3,
      autoFirst: false
    });
    crawl.bars[0].awesomplete = awesomplete;
    this.setState({crawl: crawl})
  }

  componentDidUpdate(){
    var barInputs = this.getBarInputs();
    for(var i = 0; i < barInputs.length; i++){
      var name = barInputs[i].getAttribute("name");
      var regex = /\d+/;
      var match = name.match(regex);
      if(!this.state.crawl.bars[Number.parseInt(match[0])].attached){
        barInputs[i].addEventListener("awesomplete-select", function(){
        });
      }
      // barInputs[i].addEventListener("awesomplete-selectcomplete", function() {

      // }
    }
  }

  addBar(){
    var crawl = this.state.crawl;
    crawl.bars.push({
          name: "",
          id: null,
          lat: null,
          lng: null,
          awesomplete: null
        });
    this.setState({crawl: crawl});
    crawl = this.state.crawl;
    var barInput = this.findBarInput(crawl.bars.length -1);
    crawl.bars[crawl.bars.length - 1].awesomplete = new Awesomplete(barInput, {
      minChars: 3,
      autoFirst: false
    });
  }

  findBarInput(index){
    var barInputs = this.getBarInputs();
    var filteredInputs = barInputs.filter(function(input){
      var name = input.getAttribute("name");
      var regex = /\d+/;
      var match = name.match(regex);
      if(match[0] == index){
        return input;
      }
    });
    return filteredInputs[0];
  }

  getBarInputs(){
    var inputs = document.getElementsByTagName("input");
    var barInputs = [];
    for(var i = 0; i < inputs.length; i++){
      var input = inputs[i];
      var name = input.getAttribute("name");
      if(name && name.indexOf("bar_names") > -1){
        barInputs.push(input);
      }
    }
    return barInputs;
  }

  onBarNameChange(e, index){
    var crawl = this.state.crawl;
    var value = e.target.value;
    crawl.bars[index].name = value;
    if(e.target.value.length > 2){
      $.ajax({
            url: '/bars/autocomplete/' + value,
            type: 'GET',
            dataType: 'json'
          })
          .success(function(data) {
            var list = [];
            for(var i = 0; i < data.length; i++){
              list.push(data[i].name)
            }
            crawl.bars[index].awesomplete.list = list;
          });
    }
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
    var barsArray = this.state.crawl.bars.map((bar, index) => {
          return (
            <div className="input-group" >
              <input key={index} type="text" name={"bar_names[" + index + "]"} className="form-control" placeholder={"Bar " + (index + 1) + " Name"}
              defaultValue={bar.name} onChange={(e) => this.onBarNameChange(e, index)}/>
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

