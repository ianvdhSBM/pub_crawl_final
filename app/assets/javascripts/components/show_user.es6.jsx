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
          <p>{user.email}</p>
          <p>{user.firstname}</p>
          <p>{user.lastname}</p>
          <img src={user.image.image.thumb.url} />
        </div>
      </div>
    )
  }
}