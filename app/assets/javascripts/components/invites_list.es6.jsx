class InvitesList extends React.Component {
  constructor(){
    super();
  }
  render () {
    var invites = this.props.invites.map(function(object, i) {
      return (
        <div className="invite-link">
          <a href={"/crawls/" + object.crawl.id}>{object.name} invited you {object.crawl.name}</a>
          <br/>
        </div>
      )
    });
    return (
      <div className="invites-list">
        <h3>Invites</h3>
        {invites}
      </div>
      );
  }
}

