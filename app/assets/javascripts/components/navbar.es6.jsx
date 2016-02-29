class Navbar extends React.Component {

  renderSignInSignOut(user) {
    if (user === null) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/users/sign_up" className="navigation-item"><i className="fa fa-users fa-lg"></i> Sign up!</a></li>
          <li><a href="/users/sign_in" className="navigation-item"><i className="fa fa-sign-in fa-lg"></i> Sign in</a></li>
          <li><a href="#" className="navigation-item">contact</a></li>
        </ul>
      )
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a className="navigation-item" href={"/users/" + user.id}><i className="fa fa-user fa-lg"></i> My Profile</a></li>
          <li><a className="navigation-item" rel="nofollow" data-method="delete" href="/users/sign_out"><i className="fa fa-sign-out fa-lg"></i> Sign out</a></li>
          <li><a className="navigation-item" href="#">contact</a></li>
        </ul>
      )
    }
  }

  render () {
    return (
      <nav className="navbar navbar-fixed-top" id="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* add icon to the dropdown button */}
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">hopper</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">

              <li><a href="#" className="navigation-item">about <span className="sr-only">(current)</span></a></li>
              <li><a href="/" className="navigation-item">hops</a></li>
              {
                this.props.user ? <li><a className="navigation-item"  href="/crawls/new"><i className="fa fa-beer fa-lg"></i> Create New Hop</a></li> : false
              }

            </ul>
            { this.renderSignInSignOut(this.props.user) }
          </div>
        </div>
      </nav>
    )
  }
}

