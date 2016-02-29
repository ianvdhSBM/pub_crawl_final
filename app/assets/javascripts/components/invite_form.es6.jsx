class InviteForm extends React.Component {
  constructor(props){
    super();
    this.state = {
      crawlId : props.crawlId,
      email: ""
    }
  }

  handleSubmit(e){
    e.preventDefault();
    var data = {
      email: this.state.email,
      crawl_id:  this.state.crawlId
    }
    $.ajax({
      url: "/invites",
      dataType: 'json',
      type: 'POST',
      data: data
    })
  }

  onChange(e){
    this.setState({
      email: e.target.value
    })
  }

  render () {
    return (
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
    );
  }
}

