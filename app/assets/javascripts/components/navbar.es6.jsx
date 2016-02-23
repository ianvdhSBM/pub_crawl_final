class Navbar extends React.Component {

  renderSignInSignOut(user) {
    if (user === null) {
      return (
        <li><a href="/users/sign_in">Sign in</a></li>
      )
    } else {
      return (
        <li><a rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a></li>
      )
    }
  }

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">hopper</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">about <span className="sr-only">(current)</span></a></li>
              <li><a href="#">hops</a></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="find a crawl" />
              </div>
              <button type="submit" className="btn btn-default">search</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              { this.renderSignInSignOut(this.props.user) }
                <li><a href="#">contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

