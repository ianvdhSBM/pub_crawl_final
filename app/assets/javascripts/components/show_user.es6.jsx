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
              <p></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}