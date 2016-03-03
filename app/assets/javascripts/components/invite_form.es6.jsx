class InviteForm extends React.Component {
  constructor(props){
    super();
    this.state = {
      crawlId : props.crawlId,
      email: "",
      error: false,
      success: false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    var data = {
      email: this.state.email,
      crawl_id:  this.state.crawlId,

    }
    var success = false;
    var error = false;
    $.ajax({
      url: "/invites",
      type: 'POST',
      data: data,
      success: function(data){
        this.setState({
          success: true,
          error: false
        });
      }.bind(this),
      error: function(data){
        this.setState({
          success: false,
          error: true
        });
      }.bind(this)
    })
  }

  onChange(e){
    this.setState({
      email: e.target.value
    })
  }

  resetForm(){
    this.setState({
      success: false,
      error: false
    });
  }

  render () {
    if(!this.state.error && !this.state.success){
      return (
        <div className="invite-form-flex">
          <h3>invite your friends!</h3>
          <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <div className="input-group">
                <input className="form-control" type="text" id="invite-invitee" name="invitee"
                placeholder="Invitee Email" onChange={this.onChange.bind(this)}/>
                <input type="hidden" id="invite-crawl-id" name="crawl-id" value={this.state.crawlId}/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <button type="submit" className="btn btn-default">Invite</button>
              </div>
            </div>
          </form>
        </div>
      );
    } else if(this.state.success){
      return (
        <div className="invite-form-flex">
        <h3>invite your friends!</h3>
          <p>User successfully invited</p>
          <button className="btn btn-default" onClick={this.resetForm.bind(this)}>Invite someone else</button>
        </div>
        );
    } else if (this.state.error){
      return (
        <div className="invite-form-flex">
        <form>
        <h3>invite your friends!</h3>
          <p>Something went wrong!</p>
          <button className="btn btn-default" type="button" onClick={this.resetForm.bind(this)}>Try again</button>
          </form>
        </div>
        );
    }
  }
}

