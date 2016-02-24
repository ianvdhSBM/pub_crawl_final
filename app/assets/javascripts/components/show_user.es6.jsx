class ShowUser extends React.Component {

  // constructor(props) {
  //   super();
  //   this.state = {
  //     user: props.user,
  //     crawls: props.user.crawls
  //   }
  // }

  render() {
    var user = this.props.user;

    return (
      <div className="container">
        <div className="row">
          <div className="profile-flex">
            <div className="profile-pic">
              <img src={user.image.image.thumb.url} />
            </div>
            <div className="profile-details">
              <h3>{user.firstname}'s profile</h3>
              <p>{user.email}</p>
              <p><strong>Joined:</strong> {user.created_at}</p>
              <p><strong>Hops created:</strong> (Total number of hops created)</p>
              <p><strong>Reviewed:</strong> (number of reviews) hops</p>
            </div>
          </div>
          <div>
            <h2>{user.firstname}'s Hops</h2>
          </div>
          <CrawlsList key= { user.id } crawls={ user.crawls } />
        </div>
      </div>
    )
  }
}